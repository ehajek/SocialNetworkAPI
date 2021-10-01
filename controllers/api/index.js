const router = require('express').Router();

const usersRoutes = require('./users');
const thoughtRoutes = require('./thoughts');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;