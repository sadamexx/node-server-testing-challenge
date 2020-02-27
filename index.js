require("dotenv").config();

const server = require("./server.js");

const PORT = process.env.PORT || 3333;

server.listen(PORT, () =>
console.log(`\n** Testing on port ${PORT} **\n`));