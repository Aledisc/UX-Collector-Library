'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ReadingStatuses', [
      {
        book_id: 1, 
        Status: 'Reading',
        DateStarted: new Date('2026-03-01'),
        DateFinished: null,
        Rating: null,
        notes: 'Voy por la mitad, está muy interesante.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        book_id: 1,
        Status: 'Completed',
        DateStarted: new Date('2026-02-10'),
        DateFinished: new Date('2026-02-25'),
        Rating: 5,
        notes: '¡Obra maestra! Lo recomiendo totalmente.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReadingStatuses')
  }
};
