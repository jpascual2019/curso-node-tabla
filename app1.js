
const { crearArchivo } = require('./helpers/multiplicar')
console.clear();

const base=6;

crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo,'Creado'))
.catch((err)=>console.log(err));

