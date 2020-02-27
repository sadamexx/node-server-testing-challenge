
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const apiRouter = require('./api/api-router.js');

const server = express();

//middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

//routers
server.use('/api', apiRouter);


server.get('/', (req, res) => {
    res.send("Running tests here just fine");
});

module.exports = server;

