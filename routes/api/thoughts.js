const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/api/Thoughts');

router
  .route('/')
  .get(getAllThought)
  .post(createThought);

router
  .route(':id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);


module.exports = router;
