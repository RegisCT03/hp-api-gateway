const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:houseName', async (req, res) => {
    const { houseName } = req.params;
    try {
        const response = await axios.get(`${process.env.THIRD_PARTY_API}/characters/house/${houseName}`);
        res.json(response.data);
    } catch (error) {
        const status = error.response ? error.response.status : 500;
        res.status(status).json({
            error: `No se pudieron obtener personajes de la casa ${houseName}`,
            details: error.message
        });
    }
});

module.exports = router;