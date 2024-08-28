const express = require('express');
const cors = require('cors');
const conn = require('./db/connection');
const routes = require('./routes/router');
require('dotenv').config();

const server = express();
server.use(cors());
server.use(express.json());

async function startServer() {
  try {
    await conn();
    server.use('/api', routes);

    server.listen(process.env.NODE_PORT, () => {
      console.log(`Node listening on port ${process.env.NODE_PORT}!`);
    });
  } catch (error) {
    console.log('Error starting server:', error.message);
  }
};

startServer();
