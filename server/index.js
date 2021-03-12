const express = require("express");

const PORT = process.env.PORT || 3001

const server = express();

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
