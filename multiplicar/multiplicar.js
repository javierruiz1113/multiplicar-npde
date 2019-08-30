//
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('======================='.rainbow);
    console.log(`Tabla del ${base}`.blue);
    console.log('======================='.rainbow);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i}  = ${base*i}`);;
    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((res, rej) => {
        if (!Number(base)) {
            rej(`El valor ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${[i]}  = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                rej(err);
            else
                res(`tabla-${base}.txt`)
        });
    })
};

module.exports = {
    crearArchivo,
    listarTabla
}