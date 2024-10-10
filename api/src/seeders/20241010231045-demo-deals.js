'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Deals', [
      {
        id: '1',
        street: '319 Haul Road',
        city: 'Glenrock',
        state: 'WY',
        area: 100,
        appointmentDate: new Date('2021-11-18T17:00:00'),
        price: 5750,
        status: 'In Progress',
        customerId: '1', // Assuming the customer with ID 1 exists
        numOfPeople: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        street: '47 Spruce Drive',
        city: 'Quantico',
        state: 'VA',
        area: 100,
        appointmentDate: new Date('2021-11-15T08:00:00'),
        price: 5750,
        status: 'Closed',
        customerId: '2', // Assuming the customer with ID 2 exists
        numOfPeople: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        street: '165 Belmont Drive',
        city: 'Parowan',
        state: 'UT',
        area: 150,
        appointmentDate: new Date('2021-11-16T09:00:00'),
        price: 5750,
        status: 'In Progress',
        customerId: '3', // Assuming the customer with ID 3 exists
        numOfPeople: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Deals', null, {});
  },
};
