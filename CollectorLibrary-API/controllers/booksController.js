const Book = require('../models/book');

// GET by ISBN
exports.getByIsbn = async (req, res) => {
    try {
        const book = await Book.findOne({
            where: { ISBN: req.params.isbn }
        });

        if (!book) {
            return res.status(404).json({
                message: "No se pudo encontrar el libro por ISBN"
            });
        }

        res.status(200).json(book);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST new book
exports.createBook = async (req, res) => {
    try {

        if (!req.body.title || !req.body.ISBN) {
            return res.status(400).json({
                message: "Faltan campos obligatorios (title, ISBN)"
            });
        }

        const newBook = await Book.create(req.body);

        res.status(201).json(newBook);

    } catch (error) {
        res.status(500).json({
            message: "Error al crear el libro",
            error: error.message
        });
    }
};