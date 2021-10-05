
exports.up = function(knex, Promise) {
    return knex.schema.createTable("forms_data", table => {
        table.increments();
        table.string('location');
        table.string('collector');
        table.string('survey');
        table.string('ground_disturbance');
        table.string('disturbed_area');
        table.string('trees_damaged');
        table.string('near_water');
        table.string('near_trail');
        table.string('erosion');
        table.string('fire_rings');
        table.string('improvements');
        table.string('contained');
        table.string('residential');
        table.string('trash');
        table.string('human_waste');
        table.string('social_trail');
        table.string('social_road');
        table.string('site_description');
        table.string('need_trash_pickup');
        table.string('need_signage_fix');
        table.string('need_containment_repair');
        table.string('need_fire_ring_removal');
        table.string('done_trash_pickup');
        table.string('done_signage_fix');
        table.string('done_containment_repair');
        table.string('done_fire_ring_removal');
        table.string('date'); 
        table.string('hours');
        table.string('notes');
        table.string('image');
        table.string('latlng');

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('forms_data');
};
