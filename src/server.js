require('dotenv').config();
const express = require('express');
const cors = require('cors');
const hpCharacters = require('./routes/characters');
const hpSpells = require('./routes/spells')
const app = express();
const PORT = process.env.PORT;

app.use(cors()); 
app.use(express.json());

app.use('/api/characters', hpCharacters);
app.use('/api/spells', hpSpells)

app.listen(PORT, () => {
    console.log(`Gateway en puerto ${PORT}`);
    console.log(`Endpoint disponible: http://localhost:${PORT}/api/characters`);
});