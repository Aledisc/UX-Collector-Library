const express = require('express');
const router = express.Router();
const { Author } = require('../models'); 

// Endpoint para obtener todos los autores
router.get('/', async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al obtener los autores' });
  }
});

module.exports = router;