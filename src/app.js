const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//IMPORT ROUTES
const medecinRoute = require('./routes/medecin');
const patientRoute = require('./routes/patient');
const conseilRoute = require('./routes/conseil');
const traitementRoute = require('./routes/traitement');
const rendezVousRoute = require('./routes/rendezVous');

//MIDDLEWARES

app.use(cors());
app.use(bodyParser.json());
app.use('/medecin', medecinRoute);
app.use('/patient', patientRoute);
app.use('/conseil', conseilRoute);
app.use('/traitement', traitementRoute);
app.use('/rendezVous', rendezVousRoute);

//CONNECTION
mongoose.connect('mongodb+srv://foufa:foufa123123@foufatest.jwo76.mongodb.net/foufaTest?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DataBase');
});

//LISTENING TO THE SERVER
app.listen(8000);