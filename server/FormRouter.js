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
//     console.log("entering post in form model",req.body)
//     const newForm = JSON.stringify(req.body)
//     console.log("entering post in form model",newForm)
    const newForm = res.body
    FormModel.postNew({location:newForm.location})
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
