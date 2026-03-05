require('dotenv').config();
const express = require('express');
const cors = require('cors');
const hpRoutes = require('./src/routes/characters'); 

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api', hpRoutes); 

app.listen(PORT, () => {
    console.log(`Gateway corriendo en http://localhost:${PORT}`);
    console.log(`Prueba este link: http://localhost:${PORT}/api/characters`);
});