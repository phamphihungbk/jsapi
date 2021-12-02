'use strict';
const faker = require('faker');
const experiments = [...Array(50)].map((user) => ({
  name: faker.name.findName(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
}));

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', experiments, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{}]);
  },
};
