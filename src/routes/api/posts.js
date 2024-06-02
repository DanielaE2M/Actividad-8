const router = require('express').Router();

const { getAllpots, getPostsById, createposts } = require('../../controllers/posts.controller');

router.get('/', getAllpots);
router.get('/:posts_id', getPostsById);
router.post('/', createposts);

module.exports = router;