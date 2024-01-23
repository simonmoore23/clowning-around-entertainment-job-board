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
      include: [
        {
          model: User,
          attributes: [
            'username',
            'password',
            'companyName',
            'postcode',
            'region',
            'town',
            'email',
          ],
        },
      ],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render('profile', { posts, loggedIn: true });
    // })
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
