'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Author, {foreignKey: 'author_id'})
    }
  }
  Book.init({
    book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    ISBN: DataTypes.STRING,
    page_count: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'Books',
    timestamps: false
  });
  return Book;
};