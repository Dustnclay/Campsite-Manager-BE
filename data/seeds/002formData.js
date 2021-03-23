
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('formsData').del()
      .then(function () {
        // Inserts seed entries
        return knex('formsData').insert([
          {
            location:'103',
            collector:'Dusty Traveler',
            survey:'001',
            groundDisturbance:'yes',
            disturbedArea:'yes',
            treesDamaged:'yes',
            nearWater:'yes',
            nearTrail:'yes',        
            erosion:'yes',
            fireRings:'yes',
            improvements:'yes',        
            contained:'yes',
            residential:'yes',
            trash:'yes',
            humanWaste:'yes',
            socialTrail:'yes',
            socialRoad:'yes',
            siteDescription:'yes',
            needTrashPickup:false,
            needSignageFix:false,
            needContainmentRepair:false,
            needFireRingRemoval:false,
            doneTrashPickup:false,
            doneSignageFix:false,
            doneContainmentRepair:false,
            doneFireRingRemoval:false,
            date:'yes',
            hours:'1',
            notes:'none',
            image:''
          },
          {
            location:'103',
            collector:'lazy Traveler',
            survey:'002',
            groundDisturbance:'yes',
            disturbedArea:'no',
            treesDamaged:'yes',
            nearWater:'no',
            nearTrail:'yes',        
            erosion:'yes',
            fireRings:'yes',
            improvements:'no',        
            contained:'yes',
            residential:'yes',
            trash:'yes',
            humanWaste:'no',
            socialTrail:'no',
            socialRoad:'yes',
            siteDescription:'no',
            needTrashPickup:false,
            needSignageFix:false,
            needContainmentRepair:false,
            needFireRingRemoval:false,
            doneTrashPickup:false,
            doneSignageFix:false,
            doneContainmentRepair:false,
            doneFireRingRemoval:false,
            date:'yes',
            hours:'1',
            notes:'none',
            image:''
          },
          {
            location:'103',
            collector:'Nasty Traveler',
            survey:'003',
            groundDisturbance:'no',
            disturbedArea:'no',
            treesDamaged:'yno',
            nearWater:'no',
            nearTrail:'yes',        
            erosion:'no',
            fireRings:'yes',
            improvements:'no',        
            contained:'yes',
            residential:'no',
            trash:'no',
            humanWaste:'no',
            socialTrail:'yes',
            socialRoad:'no',
            siteDescription:'yes',
            needTrashPickup:false,
            needSignageFix:false,
            needContainmentRepair:false,
            needFireRingRemoval:false,
            doneTrashPickup:false,
            doneSignageFix:false,
            doneContainmentRepair:false,
            doneFireRingRemoval:false,
            date:'yes',
            hours:'1',
            notes:'none',
            image:''
          }
        ]);
      });
  };