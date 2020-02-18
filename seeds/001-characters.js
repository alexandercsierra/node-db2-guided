
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .truncate() // empties the table and resets id back to 1
    .then(function () {
      const characters = [];
      // Inserts seed entries
      return knex('table_name').insert(characters);
    });
};
