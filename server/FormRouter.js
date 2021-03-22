const router = require('express').Router();
const FormModel = require('./FormModel.js');

router.get('/', (req,res) => {
    console.log("get to base url")
    FormModel.getAll()
        .then(formData => {
            res.status(200).json(formData)
        })
        .catch(err =>
            res.status(500).json(err))
})

router.get('/:id', (req,res) => {
    const location = req.params.id
    console.log("get to /:id")
    FormModel.getByLocation(location)
        .then(formData => {
            res.status(200).json(formData)
        })
        .catch(err =>
            res.status(500).json(err))
})
 

module.exports = router;