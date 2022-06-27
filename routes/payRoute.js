const express = require('express');
const {
    createController,
    getPayController
} = require('../controllers/payController');
const router = express.Router();

router.post('/create', createController)
router.get('/all', getPayController)

module.exports = router;