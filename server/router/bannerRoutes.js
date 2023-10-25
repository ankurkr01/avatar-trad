const bannerController = require('../controller/bannerImage/bannerImage')

const express = require('express')

const router = express.Router();

router.post('/banner', bannerController.uploadbanner);

module.exports = router;