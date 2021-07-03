const mongoose = require('mongoose');
const SpecialiteSchema = mongoose.Schema({
    id: {
        type: Int32Array,
        required: true,
    },
    nom: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Specialites', SpecialiteSchema);