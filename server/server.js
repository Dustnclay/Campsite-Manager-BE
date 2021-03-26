const express = require('express');
const helmet = require("helmet")
const cors = require("cors")
const formRouter = require('./FormRouter')

const server = express();
server.use(helmet())
server.use(express.json())
server.use(cors());

server.use('/form', formRouter)

server.get("/", (req,res) => {
    res.json({message:"Campsite Manager backend: successful get to base api"});
  }); 
  module.exports = server; 