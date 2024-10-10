'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Customers', [
      {
        id: '1',
        name: 'Deanna Annis',
        email: 'deannaannis@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=deanna@pravatar.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        name: 'Andrea Willis',
        email: 'andreawillis@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=andrea@pravatar.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        name: 'Brent Rodrigues',
        email: 'brodrigues@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=brent@pravatar.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Customers', null, {});
  },
};
