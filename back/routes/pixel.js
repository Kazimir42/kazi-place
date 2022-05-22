const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')

const PixelController = require('../controllers/pixel');

router.post('/' , PixelController.store);
router.get('/' , PixelController.all);

router.get('/new' , PixelController.new);

module.exports = router;