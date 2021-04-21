
exports.up = function(knex, Promise) {
    return knex.schema.createTable("forms_data", table => {
        table.increments();
        table.string('location');
        table.string('collector');
        table.string('survey');
        table.string('groundDisturbance');
        table.string('disturbedArea');
        table.string('treesDamaged');
        table.string('nearWater');
        table.string('nearTrail');
        table.string('erosion');
        table.string('fireRings');
        table.string('improvements');
        table.string('contained');
        table.string('residential');
        table.string('trash');
        table.string('humanWaste');
        table.string('socialTrail');
        table.string('socialRoad');
        table.string('siteDescription');
        table.string('needTrashPickup');
        table.string('needSignageFix');
        table.string('needContainmentRepair');
        table.string('needFireRingRemoval');
        table.string('doneTrashPickup');
        table.string('doneSignageFix');
        table.string('doneContainmentRepair');
        table.string('doneFireRingRemoval');
        table.string('date');
        table.string('hours');
        table.string('notes');
        table.string('image');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('forms_data');
};
