// may need fs and path if I'm serving a static db file
const fs = require('fs/promises');
const path = require('path');

const fileController = {};

fileController.getAllFodmaps = (req, res, next) => {
  // get all info from json file
  console.log('hit the fileController--getAllFodmaps!');
  return next();
};

module.exports = fileController;
