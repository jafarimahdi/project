
const express = require('express');
const router = express.Router();
const Ninja = require('../moudels/ninja');

// get list of theninjas from the db
router.get('/ninjas', function (req, res, next) {
  /* Ninja.find({}).then(function(ninja){
    res.send(ninja);
  }); */
  Ninja.geoNear(
    { type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
    { maxDistance: 100000, spherical: true }
  ).then(function (ninjas) {
    res.send(ninjas);
  }).catch(next);
});


// add a new ninjas to the db
router.post('/ninjas', function (req, res, next) {
  Ninja.create(req.body).then(function (ninja) {
    res.send(ninja);
  }).catch(next);
});



// update a ninja in the db
router.put('/ninjas/:id', function (req, res, next) {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Ninja.findOne({ _id: req.params.id }).then(function (ninja) {
      res.send(ninja)
    });
  }).catch(next);
});



// delet a ninja from the db
router.delete('/ninjas/:id', function (req, res, next) {
  Ninja.findByIdAndRemove({ _id: req.params.id }).then(function (ninja) {
    res.send(ninja);
  }).catch(next)
});

module.exports = router;