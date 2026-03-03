'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      book_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      autor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Authors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      genre:  {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      ISBN: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      page_count: {
        type: Sequelize.INTEGER,
      }

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};
