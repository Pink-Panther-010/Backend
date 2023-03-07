const express = require('express')
const router = express.Router()
const imageController = require("../controllers/images.controller")


router.get('/id/:id', imageController.getImageByUrl);


module.exports = router;
