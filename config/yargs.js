const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola tabla del multiplicar', opciones)
    .command('crear', 'genera archivo tabla del multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}