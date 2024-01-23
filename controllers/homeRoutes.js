const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['companyName'],
        },
      ],
    });

    //serialize
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('all', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }
//   res.render('login');
// });
