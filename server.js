require('dotenv').config();
const express = require('express');
const cors = require('cors');
const hpCharacter = require('./src/routes/characters'); 
const hpSpells = require('./src/routes/spells');
const hpHouse = require('./src/routes/house');
const hpStudents = require('./src/routes/students')
const hpStaff = require('./src/routes/staff')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: 'https://hp-api-front.vercel.app/'
}));
app.use(express.json());

app.use('/api/characters', hpCharacter); 
app.use('/api/spells', hpSpells);
app.use('/api/house', hpHouse);
app.use('/api/students', hpStudents);
app.use('/api/staff', hpStaff);

app.listen(PORT, () => {
    console.log(`Gateway corriendo en http://localhost:${PORT}`);
    console.log(`Prueba este link: http://localhost:${PORT}/api/characters`);
    console.log(`Prueba este link: http://localhost:${PORT}/api/spells`);
    console.log(`Prueba este link: http://localhost:${PORT}/api/house/Gryffindor`);
    console.log(`Prueba este link: http://localhost:${PORT}/api/students`);
    console.log(`Prueba este link> http://localhost:${PORT}/api/staff`)
});