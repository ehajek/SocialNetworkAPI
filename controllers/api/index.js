const router = require('express').Router();

const usersRoutes = require('./Users');
const thoughtRoutes = require('./Thoughts');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;