const fs = require('fs');

const base=6;
console.clear();

let salida = '';
salida += `****************************
*      Tabla del ${base}         *
****************************\n`

for (let i=1; i<=10; ++i){

    salida += ` ${base} x ${i} = ${base*i}\n`;
}
console.log(salida);

fs.writeFileSync(`Tabla del ${base}.txt`,salida,(err)=> {
   if (err) throw err;
   console.log('el archivo se creo con exito!!!');

})