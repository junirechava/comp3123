const fs = require('fs');
const path = require('path');

const rutaCarpetaLogs = path.join(__dirname, 'Logs');

if (fs.existsSync(rutaCarpetaLogs) === false) {
    fs.mkdirSync(rutaCarpetaLogs);    
}

// Cambiar el directorio actual a Logs
process.chdir(rutaCarpetaLogs);

let contador = 0;
let arregloArchivos = [];

while (contador < 10) {
    const nombreArchivo = 'log' + contador + '.txt';
    const rutaCompletaArchivo = path.join(rutaCarpetaLogs, nombreArchivo);
    const textoDentro = "Este es el archivo de log numero " + contador;

    fs.writeFileSync(rutaCompletaArchivo, textoDentro);
    arregloArchivos.push(nombreArchivo);

    console.log(nombreArchivo);

    contador++;
}
























/*
const fs = require('fs');
const path = require('path');

const rutaCarpetaLogs = path.join(__dirname, 'Logs');

// verific if the Logs directory exists, if not, create it
if (fs.existsSync(rutaCarpetaLogs) === false) {
    fs.mkdirSync(rutaCarpetaLogs);    
}

let contador = 0;

while (contador < 10) {
    
    const nombreArchivo = 'log' + contador + '.txt';
    const rutaCompletaArchivo = path.join(rutaCarpetaLogs, nombreArchivo);
    const textoDentro = "Este es el archivo de log numero " + contador;
    fs.writeFileSync(rutaCompletaArchivo, textoDentro);
    
    console.log(nombreArchivo);
    
    contador++;
}
*/