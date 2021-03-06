const {generate} = require('../server/auth/hash')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: 'Bob', hash: "adsew3r23rdsds"},
        {user_name: 'Matthew', hash: "adscxvcxvds"},
        {user_name: 'Mick', hash: "adsew3r23rdsds"},
        {user_name: 'Ella', hash: "adsew3r2ddvdxv3rdsds"},
        {user_name: 'Ula', hash: "cvxxzcxzcxzccv"},
        {user_name: 'Olivia', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Jan', hash: "adsew3r2ddvdxv3rdsds"},
        {user_name: 'Mark', hash: "cvxxzcxzcxzccv"},
        {user_name: 'Hans', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Bruno', hash: "adsew3r2ddvdxv3rdsds"},
        {user_name: 'Carla', hash: "cvxxzcxzcxzccv"},
        {user_name: 'Peter', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Ingrid', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Baylen', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Blaise', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Benjamin', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'David', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Daniel', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Philip', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Ava', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Ingrid', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Isabella', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Noah', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Lucas', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Mason', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Mike', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Tamara', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Sarah', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Sam', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Ted', hash: generate('password')}
      ]);
    });
};
