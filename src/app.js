const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//IMPORT ROUTES
const specialiteRoute = require('./routes/specialite');

//MIDDLEWARES

app.use(cors());
app.use(bodyParser.json());
app.use('/specialite', specialiteRoute);

//CONNECTION
mongoose.connect('mongodb+srv://foufa:foufa123123@foufatest.jwo76.mongodb.net/foufaTest?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DataBase');
});

//LISTENING TO THE SERVER
app.listen(1000);