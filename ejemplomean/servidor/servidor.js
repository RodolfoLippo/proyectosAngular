const express = require('express');
const aplicacion = express();
const puerto = 3000; // numero de puerto de ejemplo no usar el de angular 4200
const cors = require('cors');

aplicacion.use(cors());
aplicacion.get('/',(req,res) =>{
res.send(`
[
    {
        "nombre" : "rodo",
        "email" : "fm@gm.com",
        "telefono" : "1234567"

    }
]
`);
})

aplicacion.listen(puerto,() =>{
    console.log("ok arrancado");
})