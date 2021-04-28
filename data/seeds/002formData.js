
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('forms_data').del()
      .then(function () {
        // Inserts seed entries
        return knex('forms_data').insert([
          {
            location:'103',
            collector:'Dusty Traveler',
            survey:'001',
            ground_disturbance:'Recovered',
            disturbed_area:'+50',
            trees_damaged:'1-2',
            near_water:'No',
            near_trail:'No',        
            erosion:'Yes',
            fire_rings:'3',
            improvements:'Yes',        
            contained:'Natural',
            residential:'Yes',
            trash:'1-3G',
            human_waste:'2-5',
            social_trail:'10-25',
            social_road:'25-100',
            site_description:'site descriptions',
            need_trash_pickup:false,
            need_signage_fix:false,
            need_containment_repair:false,
            need_fire_ring_removal:false,
            done_trash_pickup:false,
            done_signage_fix:false,
            done_containment_repair:false,
            done_fire_ring_removal:false,
            date:10102020,
            hours:'1',
            notes:'none',
            image:''
          },
        ]);
      });
  };