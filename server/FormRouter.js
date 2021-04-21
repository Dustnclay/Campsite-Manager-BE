const router = require('express').Router();
const FormModel = require('./FormModel.js');

router.get('/', (req,res) => {
    FormModel.getAll()
        .then(formData => {
            res.status(200).json(formData)
        })
        .catch(err =>
            res.status(500).json(err))
})

router.post('/', (req,res) => {
    console.log()
    const newForm = JSON.stringify(req.body)
    FormModel.postNew(newForm)
    .then(newForm => {
        res.status(200).json("form post successful")
    })
    .catch(err =>
        res.status(500).json(err))
})

router.get('/:id', (req,res) => {
    const location = req.params.id
    FormModel.getByLocation(location)
        .then(formData => {
            res.status(200).json(formData)
        })
        .catch(err =>
            res.status(500).json(err))
})


 

module.exports = router;