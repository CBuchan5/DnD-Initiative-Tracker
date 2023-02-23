// routes/api/players.js

const express = require('express');
const router = express.Router();

// Load Book model
const Player = require('../../modles/Player');
// @route GET api/characters/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('player route testing!'));

// @route GET api/characters
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Player.find()
    .then(players => res.json(players))
    .catch(err => res.status(404).json({ noplayersfound: 'No Books found' }));
});

// @route GET api/characters/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Player.findById(req.params.id)
    .then(player => res.json(player))
    .catch(err => res.status(404).json({ nobookfound: 'No player found' }));
});

// @route GET api/characters
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Book.create(req.body)
    .then(player => res.json({ msg: 'Player added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this player' }));
});

// @route GET api/characters/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(player => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/characters/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(player => res.json({ mgs: 'Player entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such player' }));
});

module.exports = router;