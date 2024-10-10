'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Todos', [
      {
        id: '1',
        date: new Date('2021-11-17T10:00:00'),
        description: 'Meeting with partners',
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        date: new Date('2021-11-24T10:00:00'),
        description: 'Web conference agenda',
        status: 'In Progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        date: new Date('2021-10-24T10:00:00'),
        description: 'Lunch with Steve',
        status: 'Completed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Todos', null, {});
  },
};
