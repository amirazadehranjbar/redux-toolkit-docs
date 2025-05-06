//region Imports
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
//endregion

//region Create App
const app = express();
//endregion

//region Middlewares
app.use(cors());
app.use(express.json());
//endregion

//region Routes
app.use('/api/users', userRoutes);
//endregion

//region Error Handler
app.use(errorHandler);
//endregion

module.exports = app;
