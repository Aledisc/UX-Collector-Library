'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        book_id: 1,
        ISBN: '978-0141036144',
        title: 'Diario de un soñador',
      page_count: 200,
      author_id: 1, 
      genre: 'Slice of life'
      /*
      createdAt: new Date(),
      updatedAt: new Date()
      */
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})
  }
};
