const fs = require('fs');

const crearArchivo = (base, listar = true) => {

    return promesa = new Promise((resolve, reject) => {

    if (listar) {
       let salida = '';
       salida += `****************************
*      Tabla del ${base}         *
****************************\n`
    
   

    for (let i = 1; i <= 10; ++i) {

        salida += ` ${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);
    }
    fs.writeFileSync(`Tabla del ${base}.txt`, salida, (err) => {
        
        resolve(salida);
    })
   })
}

module.exports = {
    crearArchivo
}