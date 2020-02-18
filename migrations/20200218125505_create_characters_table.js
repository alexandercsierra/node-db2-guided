//changes that apply to database
//knex migrate:latest
exports.up = function(knex) {
    //DO NOT FORGET TO RETURN
    return knex.schema.createTable('characters', tbl=>{
        //adds an id column that auto-increments
        //could pass in a name into the parenthesis ex: tbl.increments('characterID')
        tbl.increments(); //primary key
        //string of name, 256 chars max, required (not nullable), and indexed for faster searching
        tbl.string('name', 256).notNullable().index();

        //doesn't need additional because is optional
        tbl.string('house', 128);

        tbl.string('origin', 256);

        //booleans are normally stored as 1 for true and 0 for false
        tbl.boolean('alive').defaultTo(true);
  })
};


//how to undo those changes => knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('characters');
};
