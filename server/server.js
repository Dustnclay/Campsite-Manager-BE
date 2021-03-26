const express = require('express');
const helmet = require("helmet")
const cors = require("cors")
const formRouter = require('./FormRouter')

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

const server = express();
server.use(helmet())
server.use(express.json())
server.use(cors());

server.use('/form', formRouter)

server.get("/", (req,res) => {
    res.json({message:"Campsite Manager backend: successful get to base api"});
  }); 
  module.exports = server; 