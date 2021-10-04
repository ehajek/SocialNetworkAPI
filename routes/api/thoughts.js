const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReation,
    deleteReaction
} = require('../../controllers/api/Thoughts');

router
  .route('/')
  .get(getAllThought);
router
  .route('/:userId')
  .post(createThought);


router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought);

router
  .route('/:userId/:thoughtId')
  .delete(deleteThought);

router
  .route('/:thoughtId/reactions')
  .post(createReation);

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
