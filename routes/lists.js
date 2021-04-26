const { Router } =  require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');



const List = require('../models/List');

router.get('/', async (req, res) => {
    const lists = await List.find().sort('-_id');
    res.json(lists);
});


router.post('/', async (req, res) => {
    const { username, namelist, description,items} = req.body;
    const newList = new List({ username, namelist, description,items});
    console.log(newList)
    await newList.save();
    res.json({'message': 'List Saved'});
});

module.exports = router;