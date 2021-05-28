const argv = require('yargs')
    .option(
        'b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: "Número base de la tabla"
        }
    )
    .option(
        'l', {
            alias: 'list',
            type: 'boolean',
            default: false,
            describe: "Lista la tabla"
        }
    )
    .option(
        'i', {
            alias: 'iteracion',
            type: 'number',
            demandOption: true,
            describe: "Límite de iteraciones de la tabla"
        }
    )
    .argv;

    module.exports = argv;