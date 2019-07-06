
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up the express app
const app = express();

// conect to the mongdb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

  // setup static files
app.use(express.static('public'));

    // use body-parser middleware
app.use(bodyParser.json());  

//aval file balatar ra bad az slash migozarid va requier va location file dovam ra
app.use('/api',require('./routes/api')); // midelware 2

// middeleware 3 (error handling )
app.use(function(err,req,res,next){
  console.log(err); // to see the erroron console
  res.status(422).send({error:err.message});
})




// listen for requests 
app.listen(process.env.port || 4000, function () {
  console.log('now listing for the requests');
});


