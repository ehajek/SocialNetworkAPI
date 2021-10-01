const router = require('express').Router();

const {
    //get from controller file - need to create 
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/api/users')


router
  .route('/')
  .get(getAllUser)
  .post(createUser);


  router
    .route(':id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


module.exports = router;
