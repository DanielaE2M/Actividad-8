const router = require('express').Router();

router.use('/autor', require('./api/autor'));
router.use('/posts', require('./api/posts'));

module.exports = router;
