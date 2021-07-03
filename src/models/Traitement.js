const mongoose = require('mongoose');
const TraitementSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    dateDebut: {
        type: Date,
        required: true
    },
    dateFin: {
        type: Date,
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
            nbParJour: Number,
            interditPour: String
        }],
        required: true
    }
});

module.exports = mongoose.model('Traitements', TraitementSchema);