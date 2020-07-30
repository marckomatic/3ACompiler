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
                        let errorEnPosicion = typeof(posicion) != 'number';
                        if(errorEnPosicion){
                            return errorEnPosicion;
                        }
                        
                        if (posicion < 0 || posicion % 1 > 0) {
                            let nuevoError = {
                                descripcion: 'La posicion de acceso en el stack es invalida',
                                tipo: 'semantico',
                                linea: lineaOperando,
                                columna: columnaOperando
                            }
                            return nuevoError;
                        }
                        if(tablaSimbolos.stack[posicion] == null){
                            let error = {
                                descripcion: 'La posicion ' + posicion + ' en el stack no ha sido asignada',
                                tipo: 'semantico',
                                linea: this.linea, 
                                columna: this.columna
                            }
                            return error;
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
                        let errorEnPosicion = typeof(posicion) != 'number';
                        if(errorEnPosicion){
                            return errorEnPosicion;
                        }
                        
                        if (posicion < 0 || posicion % 1 > 0) {
                            let nuevoError = {
                                descripcion: 'La posicion de acceso en el heap es invalida',
                                tipo: 'semantico',
                                linea: lineaOperando,
                                columna: columnaOperando
                            }
                            return nuevoError;
                        }
                        if(tablaSimbolos.heap[posicion] == null){
                            let error = {
                                descripcion: 'La posicion ' + posicion + ' en el heap no ha sido asignada',
                                tipo: 'semantico',
                                linea: this.linea, 
                                columna: this.columna
                            }
                            return error;
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
                        let valor = tablaSimbolos.getSimbolo(this.valor);
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
    constructor(destino, operando1, operando2, operador, linea, columna) {
        this.destino = destino;
        this.operador = operador;
        this.operando1 = operando1;
        this.operando2 = operando2;
        this.linea = linea;
        this.columna = columna;
    }

    ejecutar(tablaSimbolos) {
        let resultado;
        if(this.operador == null){
            resultado = this.operando1.evaluar(tablaSimbolos, this.linea, this.columna);
            let resultadoValido = typeof(resultado) == 'number';
            if(!resultadoValido){
                errores.push(resultado);
                return;
            }
        }
        else{
            let op1 = this.operando1.evaluar(tablaSimbolos, this.linea, this.columna);
            let resultadoValido = typeof(op1) == 'number';
            if(!resultadoValido){
                errores.push(op1);
                return;
            }
            let op2 = this.operando2.evaluar(tablaSimbolos, this.linea, this.columna);
            resultadoValido = typeof(op2) == 'number';
            if(!resultadoValido){
                errores.push(op2);
                return;
            }
            switch(this.operador){
                case OperadorAritmetico.SUMA:
                    resultado = op1 + op2;
                    break;
                case OperadorAritmetico.RESTA:
                    resultado = op1 - op2;
                    break;
                case OperadorAritmetico.MULTIPLICACION:
                    resultado = op1 * op2;
                    break;
                case OperadorAritmetico.DIVISION:
                    resultado = op1 / op2;
                    break;
                case OperadorAritmetico.MODULO:
                    resultado = op1 % op2;
                    break;
            }
        }

        switch(this.destino.valor.toLowerCase()){
            case 'stack':{
                if(this.destino.indice == null){
                    let error = {
                        descripcion: 'Para usar el stack como destino se necesita de especificar un indice.',
                        tipo: 'semantico',
                        linea: this.linea,
                        columna: this.columna
                    }
                    errores.push(error);
                    return;
                }
                let posicionIndice = this.destino.indice.evaluar(tablaSimbolos, this.linea, this.columna);
                let errorEnPosicion = typeof(posicionIndice) != 'number';
                if(errorEnPosicion){
                    errores.push(posicionIndice);
                    return;
                }
                if(posicionIndice < 0 || posicionIndice % 1 > 0){
                    let error = {
                        descripcion: "La posicion de acceso no es una posicion valida", 
                        tipo: "semantico",
                        linea: this.linea,
                        columna: this.columna
                    }
                    errores.push(error);
                    return;
                }
                tablaSimbolos.stack[posicionIndice] = resultado;

            }   
            break;
            case 'heap':{
                if(this.destino.indice == null){
                    let error = {
                        descripcion: 'Para usar el heap como destino se necesita de especificar un indice.',
                        tipo: 'semantico',
                        linea: this.linea,
                        columna: this.columna
                    }
                    errores.push(error);
                    return;
                }
                let posicionIndice = this.destino.indice.evaluar(tablaSimbolos, this.linea, this.columna);
                let errorEnPosicion = typeof(posicionIndice) != 'number';
                if(errorEnPosicion){
                    errores.push(posicionIndice);
                    return;
                }
                if(posicionIndice < 0 || posicionIndice % 1 > 0){
                    let error = {
                        descripcion: "La posicion de acceso no es una posicion valida", 
                        tipo: "semantico",
                        linea: this.linea,
                        columna: this.columna
                    }
                    errores.push(error);
                    return;
                }
                tablaSimbolos.heap[posicionIndice] = resultado;
            }
            break;
            case 'p':{
                tablaSimbolos.p = resultado;
            }
            break;
            case 'h':{
                tablaSimbolos.h = resultado;
            }
            break;
            default:{
                tablaSimbolos.setSimbolo(this.destino.valor, resultado);
            }
            break;
        }
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

    ejecutar(tablaSimbolos) {
       let nivelEjecucionActual = tablaSimbolos.pilaEjecucion[tablaSimbolos.pilaEjecucion.length-1];
       let existeEtiqueta = nivelEjecucionActual.irAEtiqueta(this.etiqueta);
       if(!existeEtiqueta){
            let error = {
                tipo: "semantico",
                descripcion: 'no existe una etiqueta con el nombre ' + this.etiqueta + ' en el entorno actual',
                linea: this.linea,
                columna: this.columna
            }
            errores.push(error);
       }
       
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
        let valorExpresion = this.valor.evaluar(tablaSimbolos, this.linea, this.columna);
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

class NodoEtiqueta{
    constructor(nombre, linea, columna){
        this.nombre = nombre.toLowerCase();
        this.linea = linea;
        this.columna = columna;
    }

    ejecutar(tablaSimbolos){
        let nivelEjecucionActual = tablaSimbolos.pilaEjecucion[tablaSimbolos.pilaEjecucion.length-1];
        let existeEtiqueta = nivelEjecucionActual.buscarEtiqueta(this.nombre);
        if(!existeEtiqueta){
             let error = {
                 tipo: "semantico",
                 descripcion: 'no existe una etiqueta con el nombre ' + this.etiqueta + ' en el entorno actual',
                 linea: this.linea,
                 columna: this.columna
             }
             errores.push(error);
        }
        
    }
}