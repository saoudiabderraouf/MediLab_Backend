const mongoose = require('mongoose');
const MedecinSchema = mongoose.Schema({
    id: {
        type: Int32Array,
        required: true,
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
        type: String,
        required: true
    },
    idSpecialite: {
        type: Int32Array,
        required: true
    },
    latitude: {
        type: Float32Array,
        required: true
    },
    longitude: {
        type: Float32Array,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    motDePasse: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Medecins', MedecinSchema);