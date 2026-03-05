const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.THIRD_PARTY_API}/spells`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json(
            { error: "Error al obtener el catálogo de hechizos", 
              details: error.message 
            });
    }
});

module.exports = router;