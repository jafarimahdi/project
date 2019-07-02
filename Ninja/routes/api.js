const express = require('express');
const router = express.Router();

// get list of theninjas from the db
router.get('/ninjas', function (req, res) {
  res.send({ type: 'GET' });
});

// add the new ninjas to the db
router.post('/ninjas', function (req, res) {
  console.log(req.body);
    res.send({ 
      type: 'POST',
      name: req.body.name,
      rank:req.body.rank
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