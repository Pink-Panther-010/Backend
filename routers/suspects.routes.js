const express = require('express');
const controllerSuspect = require('@/Controllers/SuspectController');

const router = new express.Router();

router.get('/suspects/:id?', (req, res) => {
    const id = req.params.id;
    let suspect;

    if(!id) {
        suspect = controllerSuspect.getSuspects();
    } else{
        suspect = controllerSuspect.getSuspectsById();
    }

    res.send(suspect)
})

module.exports = router;
