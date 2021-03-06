%lex
%{
%}
%options case-insensitive

%%
\s+										{}	// se ignoran espacios en blanco
"//".*									{}	// comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]		{}	// comentario multiple líneas
"-"?[0-9]+("."[0-9]+)?\b    return 't_decimal';
"-"?[0-9]+\b                return 't_entero';


"goto"              return 't_goto';
"if"                return 't_if';
"proc"              return 't_proc';
"begin"             return 't_begin';
"end"               return 't_end';
"call"              return 't_call';
"print"             return 't_print';
"%c"                return 't_print_char';
"%i"                return 't_print_int';
"%d"                return 't_print_dec';

":"                 return 't_dospuntos';
";"                 return 't_pycoma';
","                 return 't_coma';
"("                 return 't_par_a';
")"                 return 't_par_c';
"["                 return 't_cor_a';
"]"                 return 't_cor_c';



"+"                 return 't_mas';
"-"                 return 't_menos';
"*"                 return 't_por';
"/"                 return 't_dividido';
"%"                 return 't_modulo';

"<="                return "t_menor_igual";
">="                return "t_mayor_igual";
"=="                return 't_dobleigual';
"<>"                return "t_diferente";

">"                 return "t_mayor";
"<"                 return "t_menor";
"="                 return "t_igual";


/* Espacios en blanco */
[ \r\t]+            {}
\n                  {}

([a-zA-Z_])[a-zA-Z0-9_]*	    return 't_id';

<<EOF>>                 return 'EOF';

.   { 
        let error = {
            tipo: "Lexico",
            descripcion: "Se encontro el caracter " + yytext + " no esperado.",
            linea: yylloc.first_line,
            columna: yylloc.first_column
        }
        errores.push(error);
    }
/lex

/* Asociación de operadores y precedencia */

%start Inicial

%% /* Definición de la gramática */

Inicial : Instrucciones EOF
    {
        astSentencias = $1;
    }
;



Instrucciones : Instrucciones Instruccion
    {
        $1.push($2);
        $$ = $1;
    }
    | Instruccion
    {
        let listaInstrucciones = [];
        listaInstrucciones.push($1);
        $$ = listaInstrucciones;
    }
;

Instruccion : Asignacion
    {
        $$ = $1;
    }
    | SaltoCondicional 
    {
        $$ = $1;
    }
    | SaltoIncondicional 
    {
        $$ = $1;
    }
    | LlamadaAProcedimiento
    {
        $$ = $1;
    }
    | DeclaracionProcedimiento
    {
        $$ = $1;
    }
    | Imprimir
    {
        $$ = $1;
    }
    | Etiqueta 
    {
        $$ = $1;
    }
    | error {
        let error = {
            tipo: "Sintactico",
            descripcion: "Se encontro el token inesperado " + yytext + ".",
            linea: this._$.first_line,
            columna: this._$.first_column
        }
        errores.push(error); 
    };

Asignacion : t_id t_igual Asignando
    {
        if($3 instanceof NodoAsignacion){
            let destinoTipo1 = new Operando(TipoOperando.ID, $1, null);
            $$ = new NodoAsignacion(destinoTipo1, $3.operando1, $3.operando2, $3.operador, this._$.first_column, this._$.first_line);   
        }
        else{
            let destinoTipo1 = new Operando(TipoOperando.ID, $1, null);
            $$ = new NodoAsignacion(destinoTipo1, $3, null, null, this._$.first_column, this._$.first_line);   
        }
    }
    | t_id t_cor_a OperandoSimple t_cor_c t_igual OperandoCompuesto t_pycoma
    {
        let destinoTipo2 = new Operando(TipoOperando.ID, $1, $3);
        $$ = new NodoAsignacion(destinoTipo2, $6);
    }
;

Asignando : t_id Acceso t_pycoma
    {
        $$ = new Operando(TipoOperando.ID, $1, $2);
    }
    | t_entero t_pycoma
    {
        $$ = new Operando(TipoOperando.VALOR, $1, null);
    }
    | t_decimal t_pycoma
    {
        $$ = new Operando(TipoOperando.VALOR, $1, null);
    }
    | Operacion t_pycoma
    {
        $$ = $1;
    }
    ;

Operacion : OperandoSimple Operador OperandoSimple
    {
        $$ = new NodoAsignacion(null, $1, $3, $2, null, null);   
    }
;

Operador : t_mas
    {
        $$ = OperadorAritmetico.SUMA;
    }
    | t_menos
    {
        $$ = OperadorAritmetico.RESTA;
    }
    | t_por
    {
        $$ = OperadorAritmetico.MULTIPLICACION;
    }
    | t_dividido
    {
        $$ = OperadorAritmetico.DIVISION;
    }
    | t_modulo
    {
        $$ = OperadorAritmetico.MODULO;
    }
;

OperandoCompuesto : t_id Acceso
    {
        $$ = new Operando(TipoOperando.ID, $1, $2);
    }
    | t_decimal
    {
        $$ = new Operando(TipoOperando.VALOR, $1, null);
    }
    | t_entero
    {
        $$ = new Operando(TipoOperando.VALOR, $1, null);
    }
;

Acceso : t_cor_a OperandoSimple t_cor_c
    {
        $$ = $2;
    }
    |
    {
        $$ = null;
    }
;


OperandoSimple : t_id 
    {
        $$ = new Operando(TipoOperando.ID, $1, null);
    }
    | t_decimal
    {
        $$ = new Operando(TipoOperando.VALOR, $1, null);
    }
    | t_entero
    {
        $$ = new Operando(TipoOperando.VALOR, $1, null);
    }
;


SaltoCondicional : t_if t_par_a OperandoSimple Logico OperandoSimple t_par_c t_goto t_id t_pycoma
{
    $$ = new NodoSaltoCondicional($3, $5, $4, $8, this._$.first_line, this._$.first_column);
};

Logico : t_mayor
    {
        $$ = OperadorLogico.MAYOR;
    }
    | t_menor
    {
        $$ = OperadorLogico.MENOR;
    }
    | t_dobleigual
    {
        $$ = OperadorLogico.IGUAL;
    }
    | t_diferente
    {
        $$ = OperadorLogico.DIFERENTE;
    }
    | t_mayor_igual
    {
        $$ = OperadorLogico.MAYOR_IGUAL;
    }
    | t_menor_igual
    {
        $$ = OperadorLogico.MENOR_IGUAL;
    }
;

SaltoIncondicional : t_goto t_id t_pycoma{
    $$ = new NodoSaltoIncondicional($2, this._$.first_line, this._$.first_column);
};

Imprimir : t_print t_par_a OpcionPrint t_coma OperandoCompuesto t_par_c t_pycoma
{
    $$ = new NodoPrint($3, $5, this._$.first_line, this._$.first_column);
};

OpcionPrint : t_print_int
    {
        $$ = TipoPrint.ENTERO;
    }
    | t_print_char
    {
        $$ = TipoPrint.CARACTER;
    }
    | t_print_dec
    {
        $$ = TipoPrint.DECIMAL;
    }
;

Etiqueta: t_id t_dospuntos{
    $$ = new NodoEtiqueta($1, this._$.first_line, this._$.first_column);
};

LlamadaAProcedimiento: t_call t_id t_pycoma{
    $$ = new NodoLlamadaProc($2, this._$.first_line, this._$.first_column);
};

DeclaracionProcedimiento: t_proc t_id t_begin ContenidoProcedimiento t_end
{
    $$ = new NodoDeclaracionProc($2, $4, this._$.first_line, this._$.first_column);
};

ContenidoProcedimiento: ListaSentencias 
    {
        $$ = $1;
    }
    |
    {
        $$ = [];
    }
;

ListaSentencias: ListaSentencias Sentencia   
    {
        $1.push($2);
        $$ = $1;
    }
    | Sentencia
    {
        let listaSentencias = [];
        listaSentencias.push($1);
        $$ = listaSentencias;
    }
;

Sentencia: Asignacion  
    {
        $$ = $1;
    }
    | SaltoCondicional
    {
        $$ = $1;
    }
    | SaltoIncondicional
    {
        $$ = $1;
    }
    | LlamadaAProcedimiento
    {
        $$ = $1;
    }
    | Imprimir
    {
        $$ = $1;
    }
    | Etiqueta
    {
        $$ = $1;
    }
;



