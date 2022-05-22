const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')

const PixelController = require('../controllers/pixel');

router.post('/', auth , PixelController.store);
router.get('/', auth , PixelController.all);

module.exports = router;