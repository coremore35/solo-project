const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
const homeRouter = require('./routes/home');

//DO I NE THIS? SHOULD IT GO HERE
// Handles parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/home', homeRouter);

// if (process.env.NODE_ENV === 'production' ) {
//   //Serves what ever is in the build folder
//   app.use('/build', express.static(path.join(__dirname, '../build')));

//   // serve the index.html on the '/' route
//   app.get('/', (req, res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../index.html'));
//   });
// }

//invoked if you pass an argument to next()
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);

  console.log('ERROR: ', errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

module.exports = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
