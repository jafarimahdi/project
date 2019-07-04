const express = require('express');
const router = express.Router();
const Ninja = require('../moudels/ninja')

// get list of theninjas from the db
router.get('/ninjas', function (req, res) {
  res.send({ type: 'GET' });
});

// add the new ninjas to the db
router.post('/ninjas', function (req, res) {
  Ninja.create(req.body).then(function(ninja){
    
  });
  res.send({
    type: 'POST',
    name: req.body.name,
    rank: req.body.rank,
    adress: req.body.adress
  });
});

// update the ninja in the db
router.put('/ninjas/:id', function (req, res) {
  res.send({ type: 'PUT' });
});

// delet a ninja from the db
router.delete('/ninjas/:id', function (req, res) {
  res.send({ type: 'DELETE' });
});

module.exports = router;