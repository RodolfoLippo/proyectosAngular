# proyectosAngular
 Paso 1: Instalar Node.js
 npm install -g @angular/cli
cd Desktop
mkdir proyectosangular
cd proyectosangular
ng new ejemplomean -- standalone false
Elijo CSS
No quiero server side
cd ejemplomean
ng serve

Paso 2:
ng generate service datos

Paso3:
No funcionara porque tengo que crear en xamp una carpeta llamada json, donde creare un clientes.json
con un array de objetos 
[
    {
        "nombre" : "rodo",
        "email" : "fm@gm.com",
        "telefono" : "1234567"

    }
]
paso 4:
Se copia una nueva version del proyecto, se va a src y se pegaria dentro del xamp donde este al ejemplomean

Se hace un push the commit con reemplazo llamado servicio para comunicar en red y se crea una carpeta llamada servidor.
En servidor se trabajaria con express

se usa node servidor.js (para ejecutar el express si esta instalado)

npm install express
node servidor
Ver carpeta servidor.
paso 5:
En datos.service.ts se coloca en el localhost
al arrancar el servidor express, se arranca el ng serve (se presenta el problema de rutas, porque no se pueden llamar a cualquier
servidor de cualquier origen, tenemos que hacer que nos lo permita nos falta Cors)

const cors = require('cors); <-- en servidor
npm install cors