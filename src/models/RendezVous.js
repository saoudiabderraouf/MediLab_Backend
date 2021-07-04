const mongoose = require('mongoose');
const RendezVousSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    heure: {
        type: String,
        required: true
    },
    idMedecin: {
        type: Number,
        required: true
    },
    idPatient: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('RendezVous', RendezVousSchema);