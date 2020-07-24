/**
 * Funcion que analiza y devuelve una salida compilada del codigo en tres direcciones.
 * @param {*} texto 
 */
function analizar(texto) {
    errores = [];
    astSentencias = [];
    grammar.parse(texto);
    if (errores.length > 0) {
        let salida = "";

        errores.forEach((error, index) => {
            salida = "****Se encontraron errores de sintaxis***\n\n";
            salida += (index + 1) + ") ";
            salida += "Descripcion: " + error.descripcion + " ";
            salida += "Tipo: " + error.tipo + " ";
            salida += "Linea: " + error.linea + " ";
            salida += "Columna: " + error.columna + "\n";

        });
        return salida;
    }
    let nuevaTabla = new TablaSimbolos();    

    astSentencias.forEach((sentencia, index) => {
        sentencia.ejecutar(nuevaTabla);
    });

    if (errores.length > 0) {
        let salida = "";

        errores.forEach((error, index) => {
            salida = "****Se encontraron errores de sintaxis***\n\n";
            salida += (index + 1) + ") ";
            salida += "Descripcion: " + error.descripcion + " ";
            salida += "Tipo: " + error.tipo + " ";
            salida += "Linea: " + error.linea + " ";
            salida += "Columna: " + error.columna + "\n";

        });
        nuevaTabla.salida += '\n' + salida;
    }
    return nuevaTabla.salida;

}