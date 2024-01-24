const router = require('express').Router();
const { json } = require('sequelize');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
// router.get('/', withAuth, async (req, res) => {
//   if (!req.session.loggedIn) {
//     res.render('/');
//     return;
//   }
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        // use the ID from the session
        userId: req.session.userId,
      },
      attributes: ['id', 'jobTitle', 'description', 'salary', 'created_at'],
    });
    const dbUserData = await User.findAll({
      where: {
        id: req.session.userId,
      },
      attributes: [
        'username',
        'password',
        'companyName',
        'postcode',
        'region',
        'town',
        'email',
      ],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    const users = dbUserData.map((user) => user.get({ plain: true }));
    res.render('profile', { posts, users, loggedIn: true });
    // })
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put('/', async (req, res) => {
  try {
    const dbUserData = await User.update(
      {
        companyName: req.body.companyName,
        postcode: req.body.postcode,
        town: req.body.town,
        region: req.body.region,
        email: req.body.email,
      },
      {
        where: {
          id: req.session.userId,
        },
      }
    );
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;