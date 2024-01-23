const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

// create a new post for a job listing

router.post('/', withAuth, async (req, res) => {
  console.log('The value is ', req.session);
  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {


module.exports = router;


