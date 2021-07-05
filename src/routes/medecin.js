const express = require('express');
const Medecin = require('../models/Medecin');
const router = express.Router();

/// ALL DOCTORS
router.get('/', async(req, res) => {
    try {
        const medecins = await Medecin.find();
        res.status(200).json(medecins);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// DOCTOR BY ID
router.get('/:id', async(req, res) => {
    try {
        const medecin = await Medecin.findOne({ id: req.params.id });
        res.status(200).json(medecin);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// INSERT DOCTOR
router.post('/', async(req, res) => {
    const medecin = new Medecin({
        id: req.body.id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        telephone: req.body.telephone,
        specialite: req.body.specialite,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        photo: req.body.photo,
        motDePasse: req.body.motDePasse
    });

    try {
        const savedmedecin = await medecin.save();
        res.status(200).json('Medecin inserted successfully');
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

module.exports = router;
