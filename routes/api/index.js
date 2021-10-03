const router = require('express').Router();
//const { route } = require('..');
const thoughtRoutes = require('./thoughts');
const usersRoutes = require('./users');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;