const TipoOperando = {
    ID: 1,
    VALOR: 2
}

const TipoPrint = {
    ENTERO: 1,
    DECIMAL: 2,
    CARACTER: 3
}

const OperadorAritmetico = {
    SUMA: 1,
    RESTA: 2,
    MULTIPLICACION: 3,
    DIVISION: 4,
    MODULO: 5
}

const OperadorLogico = {
    MAYOR: 1,
    MENOR: 2,
    MAYOR_QUE: 3,
    MENOR_QUE: 4,
    IGUAL: 5,
    DIFERENTE: 6
}

class TablaSimbolos {
    constructor() {
        this.stack = [];
        this.heap = [];
        this.h = 0;
        this.p = 0;
        this.simbolos = {};
        this.salida = '';
    }

    getSimbolo(nombre) {
        return this.simbolos[nombre.toLowerCase()];
    }

    setSimbolo(nombre, valor) {
        if (this.simbolos[nombre.toLowerCase()] == null) {
            this.simbolos[nombre.toLowerCase()] = valor;
            return true;
        }
        return false;
    }
}

class Operando {
    constructor(tipo, valor, indice) {
        this.tipo = tipo;
        this.valor = valor;
        this.indice = indice;
    }

    evaluar(tablaSimbolos, lineaOperando, columnaOperando) {
        switch (this.tipo) {
            case TipoOperando.ID: {
                switch (this.valor.toLowerCase()) {
                    case 'stack': {
                        if (this.indice == null) {
                            let nuevoError = {
                                descripcion: 'El uso de stack necesita el uso de un indice de acceso',
                                tipo: 'semantico',
                                linea: lineaOperando,
                                columna: columnaOperando
                            }
                            return nuevoError;
                        }

                        let posicion = this.indice.evaluar(tablaSimbolos, lineaOperando, columnaOperando);
                        if (posicion < 0 || posicion % 1 > 0) {
                            let nuevoError = {
                                descripcion: 'La posicion de acceso en el stack es invalida',
                                tipo: 'semantico',
                                linea: lineaOperando,
                                columna: columnaOperando
                            }
                            return nuevoError;
                        }

                        return tablaSimbolos.stack[posicion];
                    }
                    case 'heap': {
                        if (this.indice == null) {
                            let nuevoError = {
                                descripcion: 'El uso de heap necesita el uso de un indice de acceso',
                                tipo: 'semantico',
                                linea: lineaOperando,
                                columna: columnaOperando
                            }
                            return nuevoError;
                        }

                        let posicion = this.indice.evaluar(tablaSimbolos, lineaOperando, columnaOperando);
                        if (posicion < 0 || posicion % 1 > 0) {
                            let nuevoError = {
                                descripcion: 'La posicion de acceso en el heap es invalida',
                                tipo: 'semantico',
                                linea: lineaOperando,
                                columna: columnaOperando
                            }
                            return nuevoError;
                        }

                        return tablaSimbolos.heap[posicion];

                    }
                    case 'h': {
                        return tablaSimbolos.h;
                    }
                    break;
                    case 'p': {
                        return tablaSimbolos.p;
                    }
                    default: {
                        let valor = tablaSimbolos.simbolos.getSimbolo(this.valor);
                        if (valor == null) {
                            let nuevoError = {
                                descripcion: 'El simbolo ' + this.valor + ' no esta definido',
                                tipo: 'semantico',
                                linea: lineaOperando,
                                columna: columnaOperando
                            };
                            return nuevoError;
                        }
                        return valor;
                    }

                }
            }
            case TipoOperando.VALOR: {
                return Number(this.valor);
            }
        }
    }
}



class NodoAsignacion {
    constructor(destino, operando1, operando2, operacion, linea, columna) {
        this.destino = destino;
        this.operacion = operacion;
        this.operando1 = operando1;
        this.operando2 = operando2;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutar() {

    }
}

class NodoSaltoCondicional {
    constructor(operando1, operando2, operador, etiqueta, linea, columna) {
        this.operando1 = operando1;
        this.operando2 = operando2;
        this.operador = operador;
        this.etiqueta = etiqueta;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutar() {

    }
}

class NodoSaltoIncondicional {
    constructor(etiqueta, linea, columna) {
        this.etiqueta = etiqueta;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutar() {

    }
}

class NodoDeclaracionProc {
    constructor(nombre, sentencias, linea, columna) {
        this.nombre = nombre;
        this.sentencias = sentencias;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutar() {

    }
}

class NodoLlamadaProc {
    constructor(nombreProc, linea, columna) {
        this.nombreProc = nombre;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutar() {

    }
}

class NodoPrint {
    constructor(tipoAImprimir, valor, linea, columna) {
        this.tipoAImprimir = tipoAImprimir;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutar(tablaSimbolos) {
        let valorExpresion = this.valor.evaluar(tablaSimbolos);
        /*Los resultados de evaluar operandos solamente pueden ser de tipo number,
        * de lo contrario, debe ser un error. 
        */
        if (typeof (valorExpresion) != 'number') {
            errores.push(valorExpresion);
        }
        else {
            switch (this.tipoAImprimir) {
                case TipoPrint.ENTERO:
                    tablaSimbolos.salida += Math.trunc(valorExpresion);
                    break;
                case TipoPrint.DECIMAL:
                    tablaSimbolos.salida += valorExpresion;
                    break;
                case TipoPrint.CARACTER:
                    tablaSimbolos.salida += String.fromCharCode(Math.trunc(valorExpresion));
                    break;
            }
        }

    }
}