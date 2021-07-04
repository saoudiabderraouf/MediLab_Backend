const express = require('express');
const Traitement = require('../models/Traitement');
const router = express.Router();

/// ALL TRAITEMENTS
router.get('/', async(req, res) => {
    try {
        const traitements = await Traitement.find();
        res.status(200).json(traitements);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// TRAITEMENT BY ID
router.get('/:id', async(req, res) => {
    try {
        const traitement = await Traitement.findOne({ id: req.params.id });
        res.status(200).json(traitement);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// TRAITEMENT BY PATIENT
router.get('/patient/:id', async(req, res) => {
    try {
        const traitements = await Traitement.find({ idPatient: req.params.id });
        res.status(200).json(traitements);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// INSERT TRAITEMENT
router.post('/', async(req, res) => {
    const traitement = new Traitement({
        id: req.body.id,
        etat: req.body.etat,
        idMedecin: req.body.idMedecin,
        idPatient: req.body.idPatient,
        medicaments: req.body.medicaments
    });

    try {
        const saveTraitement = await traitement.save();
        res.status(200).json('Traitement inserted successfully');
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

module.exports = router;