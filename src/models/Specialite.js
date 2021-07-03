const mongoose = require('mongoose');
const SpecialiteSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    nom: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Specialites', SpecialiteSchema);