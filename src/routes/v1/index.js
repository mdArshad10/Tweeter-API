const { Router } = require('express');
const { createTweet } = require('../../controller/tweet-controller.js');

const router = Router();

// ============ Tweets  ============
router.route('/tweets').post(createTweet);

module.exports = router;
