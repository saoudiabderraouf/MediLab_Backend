const express = require('express');
const Specialite = require('../models/Specialite');
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const specialites = await Specialite.find();
        res.status(200).json(specialites);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

router.post('/', (req, res) => {
    const specialite = new Specialite({
        id: req.body.id,
        nom: req.body.nom
    });

    specialite.save()
        .then(data => {
            res.status(200).json('Specialite inserted successfully');
        })
        .catch(err => {
            res.status(400).json(err);
        });

    /*try {
        const savedSpecialite = await specialite.save();
        res.status(200).json(savedSpecialite);
    } catch (err) {
        res.status(404).json({ message: err });
    }*/
});

module.exports = router;