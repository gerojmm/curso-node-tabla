const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base, list, iteracion) => {
    try {

        let salida = '';
        let consola = '';
        let nombre = `tabla-${ base }.txt`;
        
        for (let i=1; i<=iteracion; i++) {
            salida += `${ base } ${ 'x'.red } ${ i } = ${ base*i}\n`;
            consola += `${ base } ${ 'x' } ${ i } = ${ base*i}\n`;
        };
        if (list) {
            console.log('=============================='.green);
            console.log('         TABLA DEL ',colors.blue(base));
            console.log('=============================='.green);
            console.log(salida);
        }
        
        
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, consola);
        
        console.log(`El archivo tabla-${ base }.txt ha sido creado`);

        return nombre;
        
    } catch (err) {
        throw err;
    }


    
}

module.exports = {
    crearArchivo
};
