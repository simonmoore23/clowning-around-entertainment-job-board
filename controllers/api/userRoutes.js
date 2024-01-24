const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll();
    res.status(200).json(dbUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
      companyName: req.body.companyName,
      postcode: req.body.postcode,
      email: req.body.email,
    });

    //GET location from postcode
    let getLoc = async (postcode) => {
      let response = await fetch(
        `https://api.postcodes.io/postcodes/${postcode}`,
        {
          method: 'GET',
        }
      );
      const data = await response.json();
      updateLoc(data);
    };
    //update the user with region and town
    let updateLoc = async (data, user) => {
      const updateLoc = await User.update(
        {
          region: data.result.region,
          town: data.result.parish,
        },
        {
          where: {
            username: req.body.username,
          },
        }
      );
    };

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;
      res.status(200).json(dbUserData);
      res.status(200).json(updateLoc);
      getLoc(req.body.postcode);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/*', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
    if ((req.session.loggedIn = true)) {
      console.log('logged in yea');
    } else {
      console.log('not logged in');
    }
    // console.log(req.session);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
