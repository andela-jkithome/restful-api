var Character = require('../models/characters');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('Welcome to our api!');   
});

router.get('/characters', function(req, res) {
  Character.find(function(err, characters) {
    if (err)
      res.send(err);
    res.json(characters);
  });
});

router.post('/characters', function(req, res) {
  var character = new Character();
    character.universe = req.body.universe;
    character.alliance = req.body.alliance;
    character.name = req.body.name;
    character.secretidentity = req.body.secretidentity;
    character.powers = req.body.powers;
    character.weakness = req.body.weakness;
    character.ranking = req.body.ranking;

    character.save(function(err) {
      if (err)
        res.send(err);
      res.send('Character created!')
    });
});

router.get('/characters/:character_id', function(req, res) {
  Character.findById(req.params.character_id, function(err, character) {
    if (err)
      res.send(err);
    res.json(character);
  });
});

router.put('/characters/:character_id', function(req, res) {
  Character.findById(req.params.character_id, function(err, character) {
    if (err)
      res.send(err);

    character.universe = req.body.universe;
    character.alliance = req.body.alliance;
    character.name = req.body.name;
    character.secretidentity = req.body.secretidentity;
    character.powers = req.body.powers;
    character.weakness = req.body.weakness;
    character.ranking = req.body.ranking;

    character.save(function(err) {
      if (err)
        res.send(err);
      res.send('Character updated!');
    });
  });
});

router.delete('/characters/:character_id', function(req, res) {
  Character.remove({
    _id: req.params.character_id
  }, function(err, character) {
    if (err)
      res.send(err);
    res.send('Character deleted!');
  });
});

module.exports = router;