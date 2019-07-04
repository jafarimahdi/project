const express = require('express');
const router = express.Router();
const Ninja = require('../moudels/ninja')

// get list of theninjas from the db
router.get('/ninjas', function (req, res, next) {
  res.send({ type: 'GET' });
});

// add the new ninjas to the db
router.post('/ninjas', function (req, res, next) {
  Ninja.create(req.body).then(function (ninja) {
    res.send(ninja);
  }).catch(next)
});


// update the ninja in the db
router.put('/ninjas/:id', function (req, res, next) {
  res.send({ type: 'PUT' });
});

// delet a ninja from the db
router.delete('/ninjas/:id', function (req, res, next) {
  res.send({ type: 'DELETE' });
});

module.exports = router;