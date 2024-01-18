const router = require('express').Router();

const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/', homeRoutes);

module.exports = router;
