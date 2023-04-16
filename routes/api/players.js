// routes/api/players.js

const express = require('express');
const router = express.Router();
router.use(express.json());

// Load Player model
const Player = require('../../modles/Player');
// @route GET api/characters/test
// @description tests players route
// @access Public
router.get('/test', (req, res) => res.send('player route testing!'));

// @route GET api/characters
// @description Get all players
// @access Public
router.get('/', (req, res) => {
  Player.find()
    .then(players => res.json(players))
    .catch(err => res.status(404).json({ noplayersfound: 'No Players found' }));
});

// @route GET api/characters/:id
// @description Get single player by id
// @access Public
router.get('/:id', (req, res) => {
  Player.findById(req.params.id)
    .then(player => res.json(player))
    .catch(err => res.status(404).json({ noplayerfound: 'No player found' }));
});

// @route GET api/characters/
// @description add/save player
// @access Public
router.post('/', (req, res) => {
  Player.create(req.body)
    .then(player => res.json({ msg: 'Player added successfully' }))
    .catch(err => console.trace({ err }) && res.status(400).json({ error: 'Unable to add this player' }));
});

// @route GET api/characters/:id
// @description Update player
// @access Public
router.put('/:id', (req, res) => {
  Player.findByIdAndUpdate(req.params.id, req.body)
    .then(player => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/characters/:id
// @description Delete player by id
// @access Public
router.delete('/:id', (req, res) => {
  Player.findByIdAndRemove(req.params.id, req.body)
    .then(player => res.json({ mgs: 'Player entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such player' }));
});

module.exports = router;