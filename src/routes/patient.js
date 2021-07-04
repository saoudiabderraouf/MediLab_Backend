const express = require('express');
const Patient = require('../models/Patient');
const router = express.Router();

/// ALL PATIENTS
router.get('/', async(req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// PATIENT BY ID
router.get('/:id', async(req, res) => {
    try {
        const patient = await Patient.findOne({ id: req.params.id });
        res.status(200).json(patient);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// INSERT PATIENT
router.post('/', async(req, res) => {
    const patient = new Patient({
        id: req.body.id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        telephone: req.body.telephone,
        motDePasse: req.body.motDePasse
    });

    try {
        const savedPatient = await patient.save();
        res.status(200).json('Patient inserted successfully');
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

module.exports = router;