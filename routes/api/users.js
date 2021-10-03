const router = require('express').Router();

const {
  //get from controller file - need to create 
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deteleFriend
} = require('../../controllers/api/Users')


router
  .route('/')
  .get(getAllUser)
  .post(createUser);

router
  .route(':id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:id/friends/:friendId')
  .post(createFriend)
  .delete(deleteFriend);


module.exports = router;
