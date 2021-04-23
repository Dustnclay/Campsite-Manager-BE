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
    const newForm = req.body
    FormModel.postNew(
        {
            location:newForm.location,
            collector:newForm.collector,
            survey:newForm.survey,
            ground_disturbance:newForm.groundDisturbance,
  //          disturbed_area:newForm.disturbedArea,
  //          trees_damaged:newForm.treesDamaged,
  //          near_water:newForm.nearWater,
  //          near_trail:newForm.nearTrail,        
  //          erosion:newForm.erosion,
  //          fire_rings:newForm.fireRings,
  //          improvements:newForm.improvements,        
  //          contained:newForm.contained,
  //          residential:newForm.residential,
  //          trash:newForm.trash,
  //          human_waste:newForm.humanWaste,
  //          social_trail:newForm.socialTrail,
  //          social_road:newForm.socialRoad,
  //          site_description:newForm.siteDescription,
  //          need_trash_pickup:newForm.needTrashPickup,
  //          need_signage_fix:newForm.needSignageFix,
  //          need_containment_repair:newForm.needContainmentRepair,
  //          need_fire_ring_removal:newForm.needFireRingRemoval,
  //          done_trash_pickup:newForm.doneTrashPickup,
  //          done_signage_fix:newForm.doneSignageFix,
  //          done_containment_repair:newForm.doneContainmentRepair,
  //          done_fire_ring_removal:newForm.doneFireRingRemoval,
  //          date:newForm.date,
  //          hours:newForm.hours,
  //          notes:newForm.notes,
  //          image:newForm.image
        }
    )
    .then(form => {
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
