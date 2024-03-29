const router = require('express').Router();

const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoutes');
const applyRoutes = require('./applyRoutes');
// const apiRoutes = require('./api');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/apply', applyRoutes);

router.use('/profile', profileRoutes);
router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

module.exports = router;
