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
          attributes: ['companyName', 'email', 'region', 'town'],
        },
      ],
    });
    // res.status(200).json(postData);
    const posts = postData.get({ plain: true });
    // res.status(200).json(postData);
    res.render('apply', { ...posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!postData) {
      res
        .status(404)
        .json({ message: 'No job listing can be found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
