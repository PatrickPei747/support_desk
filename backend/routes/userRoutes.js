const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getInfo,
} = require('../controller/userController');

const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);

router.post('/login', loginUser);

router.get('/info', protect, getInfo);

module.exports = router;
