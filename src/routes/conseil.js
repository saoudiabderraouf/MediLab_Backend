const express = require('express');
const Conseil = require('../models/Conseil');
const router = express.Router();

/// ALL CONSEILS
router.get('/', async(req, res) => {
    try {
        const conseils = await Conseil.find();
        res.status(200).json(conseils);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// CONSEIL BY ID
router.get('/:id', async(req, res) => {
    try {
        const conseil = await Conseil.findOne({ id: req.params.id });
        res.status(200).json(conseil);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// CONSEIL BY PATIENT
router.get('/patient/:id', async(req, res) => {
    try {
        const conseils = await Conseil.find({ idPatient: req.params.id });
        res.status(200).json(conseils);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// INSERT CONSEIL
router.post('/', async(req, res) => {
    const conseil = new Conseil({
        id: req.body.id,
        text: req.body.text,
        date: req.body.date,
        idMedecin: req.body.idMedecin,
        idPatient: req.body.idPatient
    });

    try {
        const saveConseil = await conseil.save();
        res.status(200).json('Conseil inserted successfully');
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// INSERT CONSEILS
router.post('/addConseils', function(req, res) {
    var advices = req.body
    try {
        advices.forEach(advice => {
            const conseil = new Conseil({
                id: advice.id,
                text: advice.text,
                date: advice.date,
                idMedecin: advice.idMedecin,
                idPatient: advice.idPatient
            });
            conseil.save();
        });
        res.status(200).json('Advice inserted successfully');
    } catch (err) {
        res.status(404).json({ message: err });
    }

});

module.exports = router;