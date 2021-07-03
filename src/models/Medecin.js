const mongoose = require('mongoose');
const MedecinSchema = mongoose.Schema({
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
    specialite: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Medecins', MedecinSchema);