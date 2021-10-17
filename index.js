const express = require('express');
require('dotenv').config();
const cors = require('cors');


// Crear el servidor de express
const app = express();

// Base de datos


// CORS
app.use(cors())

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );


app.get('/work',(req,res)=>{
    res.redirect('./')
})
// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});






