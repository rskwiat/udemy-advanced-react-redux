//Main starting point of app
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

const router = require('./router');

//db
mongoose.connect('mongodb://localhost:auth/auth');

//App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//Server setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on ${port}`);
