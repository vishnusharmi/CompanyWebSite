const express = require('express');
const { login, register, verifyOTP } = require('../controller/AuthController');
const upload = require('../middlewares/UploadMiddleware');

const router = express.Router();

router.post('/login', login);
router.post('/register', upload.single('image'), register); 

 router.post('/verify', verifyOTP);

module.exports = router;
