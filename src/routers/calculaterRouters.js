const express = require('express');
const router = express.Router();
const {indexView} = require('../controller/calculaterController')

router.get('/', indexView);


module.exports = router;
