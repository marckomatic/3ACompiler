/**
 * Funcion que analiza y devuelve una salida compilada del codigo en tres direcciones.
 * @param {*} texto 
 */
function analizar(texto) {
    errores = [];
    astSentencias = [];
    indiceSentenciaActual = 0;
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

    let ast = new AST(astSentencias);
    let salida = ast.ejecutar();

    if (errores.length > 0) {
        salida = "\n\n";

        errores.forEach((error, index) => {
            salida = "****Se encontraron errores de ejecucion***\n\n";
            salida += (index + 1) + ") ";
            salida += "Descripcion: " + error.descripcion + " ";
            salida += "Tipo: " + error.tipo + " ";
            salida += "Linea: " + error.linea + " ";
            salida += "Columna: " + error.columna + "\n";

        });
        salida = "\n";
    }
    return salida;

}