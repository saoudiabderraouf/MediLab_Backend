const mongoose = require('mongoose');
const PatientSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    motDePasse: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Patients', PatientSchema);