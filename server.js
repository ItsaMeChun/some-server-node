require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const createError = require('http-errors');
const errorHandleRequest = require('./middleware/errorHandleRequest');
const connectDB = require('./services/connectDB');

const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => {
    connectDB();
    console.log('server is running on port ' + port);
});