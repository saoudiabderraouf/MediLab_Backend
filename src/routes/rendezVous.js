const express = require('express');
const RendezVous = require('../models/RendezVous');
const Patient = require('../models/Patient');
const Traitement = require('../models/Traitement');
const router = express.Router();

/// ALL RDVs
router.get('/', async(req, res) => {
    try {
        const rendezVouss = await RendezVous.find();
        res.status(200).json(rendezVouss);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});
/// RDV BY Patient ID
router.get('/byPatient', async(req, res) => {
    const idPatient = String(req.query.idPatient)
    try {
        const rendezVous = await RendezVous.find({ idPatient: idPatient });
        res.status(200).json(rendezVous);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});


/// RDV BY Medecin ID
router.get('/byMedecin', async(req, res) => {
    const idMedecin = String(req.query.idMedecin)
    try {
        const rendezVous = await RendezVous.find({ idMedecin: idMedecin });
        res.status(200).json(rendezVous);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// RDV BY Medecin ID
router.get('/allByMedecin', async(req, res) => {
    const idMedecin = String(req.query.idMedecin)
    try {
        const rendezVous = await RendezVous.find({ idMedecin: idMedecin });
        const ids = [];
        rendezVous.forEach(r => {
            ids.push(r.idPatient);
        });

        const patients = await Patient.find({ id: { $in: ids } });

        const traitements = await Traitement.find({ idPatient: { $in: ids } });

        res.status(200).json([rendezVous, patients, traitements]);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// INSERT RDV
router.post('/', async(req, res) => {
    const rendezVous = new RendezVous({
        id: req.body.id,
        date: req.body.date,
        heure: req.body.heure,
        idMedecin: req.body.idMedecin,
        idPatient: req.body.idPatient
    });

    try {
        const saveRendezVous = await rendezVous.save();
        res.status(200).json('RendezVous inserted successfully');
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

/// RDV LIBRES
router.post('/libres', async(req, res) => {
    var allHeures = ["8h00", "9h00", "10h00", "11h00", "13h00", "14h00", "15h00", "16h00", ]
    var query = { $and: [{ date: req.body.date }, { idMedecin: req.body.idMedecin }] }
    try {
        const rendezVouss = await RendezVous.find(query);
        if (rendezVouss != null) {
            rendezVouss.forEach(rdv => {
                if (allHeures.includes(rdv.heure)) {
                    var index = allHeures.indexOf(rdv.heure);
                    allHeures.splice(index, 1);
                }
            });
        }
        res.status(200).json(allHeures);
    } catch (err) {
        res.status(404).json({ message: err });
    }
});

module.exports = router;