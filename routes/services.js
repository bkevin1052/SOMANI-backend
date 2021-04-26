const { Router } =  require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');



const Service = require('../models/Service');

router.get('/', async (req, res) => {
    const services = await Service.find().sort('-_id');
    res.json(services);
});


router.post('/', async (req, res) => {
    const { servicename, description, items} = req.body;
    const newService = new Service({ servicename, description, items});
    console.log(newService)
    await newService.save();
    res.json({'message': 'Service Saved'});
});

module.exports = router;