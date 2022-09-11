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
//using getSubscriber middleware
router.get('/:id', getSubscriber,(req, res) => {
res.send(res.subscriber.name)
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

//middleware function
async function getSubscriber(req, res, next){
    let subcscriber
try{
subscriber = await Subscriber.findById(req.params.id)
if (subscriber == null){
    return res.status(404).json({message: 'Could not find Sub'})
}
} catch (err) {
return res.status(500).json({message : err.message})
}
res.subscriber = subscriber;//allows us to call subscribers that we set here in the other requests
next()
}

module.exports = router;