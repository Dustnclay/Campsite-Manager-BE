const express = require("express");

const PORT = process.env.PORT || 3000

const server = express();

server.get("/api", (req,res) => {
  res.json({message:"Campsite Manager backend: successful get to base api"});
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
