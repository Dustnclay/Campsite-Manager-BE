
exports.up = function(knex, Promise) {
    return knex.schema.createTable("formsData", table => {
        table.increments();
        table.string('location').notNullable();
        table.string('collector').notNullable();
        table.string('survey').notNullable();
        table.string('groundDisturbance').notNullable();
        table.string('disturbedArea').notNullable();
        table.string('treesDamaged').notNullable();
        table.string('nearWater').notNullable();
        table.string('nearTrail').notNullable();
        table.string('erosion').notNullable();
        table.string('fireRings').notNullable();
        table.string('improvements').notNullable();
        table.string('contained').notNullable();
        table.string('residential').notNullable();
        table.string('trash').notNullable();
        table.string('humanWaste').notNullable();
        table.string('socialTrail').notNullable();
        table.string('socialRoad').notNullable();
        table.string('siteDescription').notNullable();
        table.string('needTrashPickup').notNullable();
        table.string('needSignageFix').notNullable();
        table.string('needContainmentRepair').notNullable();
        table.string('needFireRingRemoval').notNullable();
        table.string('doneTrashPickup').notNullable();
        table.string('doneSignageFix').notNullable();
        table.string('doneContainmentRepair').notNullable();
        table.string('doneFireRingRemoval').notNullable();
        table.string('date').notNullable();
        table.string('hours').notNullable();
        table.string('notes').notNullable();
        table.string('image').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('formsData');
};

// exports.up = function(knex, Promise) {
//     return knex.schema.createTable('users', function(table) {
//         table.increments();
//         table.string('email').notNullable();
//         table.string('password').notNullable();
//         table.timestamp('created_at').defaultTo(knex.fn.now())
//         table.timestamp('updated_at').defaultTo(knex.fn.now())
//       })
//     }
    
//     exports.down = function(knex, Promise) {
//       return knex.schema.dropTable('users');
//     }