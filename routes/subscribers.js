const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');


//Get all from Mailing List
router.get('/' , async (req, res) => {
try{
    const subscribers = await Subscriber.find()
    res.json(subscribers)
} catch (err) {
    res.status(500).json({message: err.message})
}
})

//Get one from Mailing List
router.get('/:id' ,(req, res) => {
try{
res.json(req.params.id)
} catch (err) {
    res.status(500).json({message: err.message})
}
})

//Create one for Mailing List
router.post('/' , async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
        } catch (err) {
            res.status(400).json({message: err.message})
    }
})

//Update one 
router.patch('/:id' ,(req, res) => {
    
})

//Delete one 
router.post('/:id' ,(req, res) => {
    
})
module.exports = router;