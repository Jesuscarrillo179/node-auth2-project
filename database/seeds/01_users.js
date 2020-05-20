
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          {username:"joe biden", password:"biden" , department: "manager"},
          {username:"frank sinatra", password:"sinatra" , department: "customer"}
      ]);
    });
};
