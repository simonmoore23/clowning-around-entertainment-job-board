const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'jobTitle', 'description', 'salary', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['companyName', 'email'],
        },
      ],
    });
    // res.status(200).json(postData);
    const posts = postData.get({ plain: true });
    // res.status(200).json(postData);
    res.render('apply', { ...posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
