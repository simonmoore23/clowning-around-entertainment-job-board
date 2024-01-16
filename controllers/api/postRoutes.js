const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// create a new post for a job listing

router.post('/', withAuth, async (req, res) => {
    console.log('The value is ', req.session);
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;