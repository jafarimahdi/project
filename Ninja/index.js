
const express = require('express');
const bodyParser = require('body-parser');

// set up the express app
const app = express();

app.use(bodyParser.json());

//aval file balatar ra bad az slash migozarid va requier va location file dovam ra
app.use('/api',require('./routes/api'));

// listen for requests 
app.listen(process.env.port || 4000, function () {
  console.log('now listing for the request');
})


