const { options } = require('yargs');
const { crearArchivo, nombreArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();


crearArchivo(argv.base, argv.list, argv.iteracion)
    .then( nombreArchivo => console.log(nombreArchivo.blue, ' creado'))
    .catch( err => console.log(err));
