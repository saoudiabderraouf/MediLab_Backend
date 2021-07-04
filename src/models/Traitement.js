const mongoose = require('mongoose');
const TraitementSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    duree: {
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
    },
    medicaments: {
        type: [{
            nom: String,
            description: String,
            dateDebut: Date,
            dateFin: Date,
            nbParJour: Number,
            interditPour: String
        }],
        required: true
    }
});

module.exports = mongoose.model('Traitements', TraitementSchema);