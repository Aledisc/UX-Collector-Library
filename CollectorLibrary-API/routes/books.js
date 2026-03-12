const express = require('express');
const router = express.Router();

const booksController = require('../controllers/booksController');

// GET by ISBN
router.get('/isbn/:isbn', booksController.getByIsbn);

// POST new book
router.post('/', booksController.createBook);

module.exports = router;