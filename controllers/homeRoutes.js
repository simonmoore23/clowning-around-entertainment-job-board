const router = require('express').Router();
const { Post, User } = require('../models');
const { openModal } = require('../public/js/script.js');

// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('all', { loggedIn: req.session.loggedIn });
});

module.exports = router;

router.get('/profile', async (req, res) => {
  if (!req.session.loggedIn) {
    res.render('/');
    return;
  }
  res.render('profile');
});

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }
//   res.render('login');
// });
