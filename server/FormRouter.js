const router = require('express').Router();
const FormModel = require('./FormModel.js');

router.get('/', (req,res)=> {
    FormModel.getAll()
        .then(formData => {
            res.status(200).json(formData)
        })
        .catch(err =>
            res.status(500).json(err))
})

module.exports = router;