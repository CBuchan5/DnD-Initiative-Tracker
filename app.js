const express = require('express');
const connectDB = require('./db');
const players = require('./routes/api/players');
const app = express();
const cors = require('cors');

// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/players', players);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));