'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ReadingStatuses', [
      {
        BookID: 1, 
        Status: 'Reading',
        DateStarted: new Date('2026-03-01'),
        DateFinished: null,
        Rating: null,
        notes: 'Empezando',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookID: 1,
        Status: 'Completed',
        DateStarted: new Date('2026-02-10'),
        DateFinished: new Date('2026-02-25'),
        Rating: 5,
        notes: 'Esta bueno',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReadingStatuses')
  }
};
