const router = require('express').Router();

const homeRoutes = require('./home-routes');

router.use('/', home-routes);

module.exports = router;