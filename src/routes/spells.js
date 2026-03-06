const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.THIRD_PARTY_API}/spells`);
        res.json(response.data);
    } catch (error) {
        const status = error.response ? error.response.status : 500;
        res.status(status).json(
            { error: "Error al obtener el catálogo de hechizos", 
              details: error.message 
            });
    }
});

module.exports = router;