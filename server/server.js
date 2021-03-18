const express = require('express');
const formRouter = require('./FormRouter')

const server = express();
server.use(express.json())

server.get('/', formRouter)

server.get("/api", (req,res) => {
    res.json({message:"Campsite Manager backend: successful get to base api"});
  });

  module.exports = server;