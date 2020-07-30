var errores = [];
var astSentencias = [];

class TablaSimbolos {
    constructor(pilaEjecucion) {
        this.stack = [];
        this.heap = [];
        this.h = 0;
        this.p = 0;
        this.simbolos = {};
        this.salida = '';
        this.pilaEjecucion = pilaEjecucion;
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


class NivelDeEjecucion{
    constructor(listaSentecias){
        this.listaSentecias = listaSentecias;
        this.indiceSentenciaActual = 0;
    }

    ejecutar(tablaSimbolos){
        while(this.indiceSentenciaActual < this.listaSentecias.length){
            let sentenciaActual = this.listaSentecias[this.indiceSentenciaActual];
            sentenciaActual.ejecutar(tablaSimbolos);
            this.indiceSentenciaActual++;
        }
    }

    irAEtiqueta(nombreEtiqueta){
        for(let i = 0; i < this.listaSentecias.length; i++){
            let sentencia = this.listaSentecias[i];
            if(sentencia instanceof NodoEtiqueta && sentencia.nombre.toLowerCase() == nombreEtiqueta.toLowerCase()){
                this.indiceSentenciaActual = i;
                return true;
            }
        }
        return false;
    }

    buscarEtiqueta(nombreEtiqueta){
        for(let i = 0; i < this.listaSentecias.length; i++){
            let sentencia = this.listaSentecias[i];
            if(sentencia instanceof NodoEtiqueta && sentencia.nombre.toLowerCase() == nombreEtiqueta.toLowerCase()){
                return true;
            }
        }
        return false; 
    }
}

class AST{
    constructor(listaSentecias){
        this.listaSentecias = listaSentecias;
        this.pilaEjecucion = [];
        let nuevoNivelDeEjecucion = new NivelDeEjecucion(listaSentecias);
        this.pilaEjecucion.push(nuevoNivelDeEjecucion);
        this.tablaSimbolos = new TablaSimbolos(this.pilaEjecucion);
    }

    ejecutar(){
        let nivelInicial = this.pilaEjecucion[0];
        nivelInicial.ejecutar(this.tablaSimbolos);
        return this.tablaSimbolos.salida;
    }
}