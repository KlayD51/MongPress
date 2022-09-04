const express = require('express');
const router = express.Router();

//Get all from Mailing List
router.get('/' ,(req, res) => {
res.send('wassup');
})

//Get one from Mailing List
router.get('/:id' ,(req, res) => {
req.params.id
})

//Create one for Mailing List
router.post('/:id' ,(req, res) => {
    
})

//Update one 
router.patch('/:id' ,(req, res) => {
    
})

//Delete one 
router.post('/:id' ,(req, res) => {
    
})
module.exports = router;