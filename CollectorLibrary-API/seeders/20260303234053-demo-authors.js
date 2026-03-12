'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Authors', [{
    id:1,
    name:'Fulano Detal',
    nationality: 'Honduras',
    createdAt: new Date(),
    updatedAt: new Date()
    
   },
   {
    id: 2,
        name: 'Gabriel García Márquez',
        nationality: 'Colombia',
        createdAt: new Date(),
        updatedAt: new Date()
  },
  {
    id: 3,
        name: 'Harper Lee',
        nationality: 'Estados Unidos',
        createdAt: new Date(),
        updatedAt: new Date()
  }
])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {})
  }
};
