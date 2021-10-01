const router = require('express').Router();
const { route } = require('..');
const thoughtRoutes = require('./thoughts');
const usersRoutes = require('./users');

route.use('/users', usersRoutes);
route.use('/thoughts', thoughtRoutes);

module.exports = router;