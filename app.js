const express = require('express');
const connectDB = require('./config/db');
const players = require('./routes/api/players');
const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/players', players);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));