
exports.up = function(knex) {
    return knex.schema.table('characters', tbl => {
        tbl.string('sigil', 129);
    })
  //   return knex.schema.altertable()
  };
  
  exports.down = function(knex) {
    return knex.schema.table('characters', tbl =>{
        tbl.string('sigil', 128);
    })
  };
  