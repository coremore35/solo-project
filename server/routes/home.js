const express = require('express');
const fileController = require('../controllers/fileController');

const router = express.Router();

router.get('/fructans', fileController.getAllFodmaps, (req, res) => {
  return res.status(200).json();
});

module.exports = router;
