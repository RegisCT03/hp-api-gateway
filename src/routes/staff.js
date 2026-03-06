const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.THIRD_PARTY_API}/characters/staff`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ 
            error: "Error al obtener datos",
            details: error.message
        });
    }
});

module.exports = router