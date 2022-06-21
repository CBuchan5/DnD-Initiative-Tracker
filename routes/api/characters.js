// const express = require('express');
// const router = express.Router();

const Player = require('../../models/Player');

router.get('/test', (req, res) => res.send('character route testing!'));

router.get('/:id', (req, res) => {
    Player.findById(req.params.id)
      .then(player => res.json(player))
      .catch(err => res.status(404).json({ nobookfound: 'No player found' }));
  });