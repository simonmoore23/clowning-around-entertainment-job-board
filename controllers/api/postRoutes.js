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
        console.log(err);
        res.status(400).json(err);
    }
});

// router.delete('/:id', withAuth, async (req, res) => {

router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No job listing can be found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;