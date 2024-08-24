const mongoose = require('mongoose');
require('dotenv').config();

async function main() {
  const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(mongoURI);

    console.log('Retorno Connection DB: Connected to mongo database');
  } catch (error) {
    console.log('Retorno Connection DB:', error.message);
    throw error;
  }
};

module.exports = main;

