const mongoose = require('mongoose');
const ConseilSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
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

module.exports = mongoose.model('Conseils', ConseilSchema);