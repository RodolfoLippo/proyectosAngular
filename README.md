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
con un array de objetos [
    {
        "nombre" : "rodo",
        "email" : "fm@gm.com",
        "telefono" : "1234567"

    }
]