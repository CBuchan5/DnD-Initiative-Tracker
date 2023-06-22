require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const db = process.env.MONGODB_URL || 'mongodb://localhost:27017/test';
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`MongoDB Connected`));
  }
  catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};


module.exports = connectDB;
