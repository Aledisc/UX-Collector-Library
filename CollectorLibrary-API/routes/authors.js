const express = require('express');
const router = express.Router();

const { Author } = require('../models'); 

router.get('/', async (req, res) => {
    try {
        
        const authors = await Author.findAll();
        
        
        res.status(200).json(authors);
    } catch (error) {
        console.error('Error al obtener autores:', error);
        res.status(500).json({ 
            message: 'Error en el servidor',
            error: error.message 
        });
    }
});
//module.exports = router;

let createAuthor = async (request, response) => {
    try {
        console.log(request.body.length)
        if (request.body.length === Undefined){
            response.status(406).json({
                status: 406,
                message: "No se recibieron datos."
            })
        } else if (request.body.firstName === undefined && request.body.lastName === undefined){
            request.body.firstName = "Anonimo"
            request.body.lastName = "Anonimo"
        } else {
            if(request.body.firstName === undefined) {
                request.body.firstName = "Anonimo"
            } else {
                request.body.lastName = "Anonimo"
            }
        }
        let newAuthor = await AuthenticatorResponse.create(request.body)
        response.status(201).json({
            status: 201,
            data: newAuthor
        })
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

module.exports = router; 