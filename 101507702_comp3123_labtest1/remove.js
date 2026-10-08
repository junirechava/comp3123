const fs = require('fs');
const path = require('path');

const rutaCarpetaLogs = path.join(__dirname, 'Logs');

if (fs.existsSync(rutaCarpetaLogs) === true) {
    
    const listaDeArchivos = fs.readdirSync(rutaCarpetaLogs);
    

    for (let i = 0; i < listaDeArchivos.length; i++) {
        
        // save the current file name in a variable
        const archivoActual = listaDeArchivos[i];
        
        console.log("delete files..." + archivoActual);
        
        const rutaDelArchivoABorrar = path.join(rutaCarpetaLogs, archivoActual);
        
        fs.unlinkSync(rutaDelArchivoABorrar);
    }
    fs.rmdirSync(rutaCarpetaLogs);
} 
