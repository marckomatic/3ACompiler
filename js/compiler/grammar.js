/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammar = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,12],$V2=[1,13],$V3=[1,14],$V4=[1,17],$V5=[1,15],$V6=[1,16],$V7=[2,5,14,32,36,43,50,51],$V8=[1,35],$V9=[1,37],$Va=[1,36],$Vb=[2,5,14,32,36,43,50,51,54],$Vc=[27,28,29,30,31],$Vd=[2,29],$Ve=[1,47],$Vf=[2,28],$Vg=[2,31],$Vh=[2,30],$Vi=[19,21,35,37,38,39,40,41,42],$Vj=[14,23,24],$Vk=[14,32,36,43,50,54],$Vl=[1,83],$Vm=[1,85],$Vn=[1,84],$Vo=[21,35];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Inicial":3,"Instrucciones":4,"EOF":5,"Instruccion":6,"Asignacion":7,"SaltoCondicional":8,"SaltoIncondicional":9,"LlamadaAProcedimiento":10,"DeclaracionProcedimiento":11,"Imprimir":12,"Etiqueta":13,"t_id":14,"t_igual":15,"Asignando":16,"t_cor_a":17,"OperandoSimple":18,"t_cor_c":19,"OperandoCompuesto":20,"t_pycoma":21,"Acceso":22,"t_entero":23,"t_decimal":24,"Operacion":25,"Operador":26,"t_mas":27,"t_menos":28,"t_por":29,"t_dividido":30,"t_modulo":31,"t_if":32,"t_par_a":33,"Logico":34,"t_par_c":35,"t_goto":36,"t_mayor":37,"t_menor":38,"t_dobleigual":39,"t_diferente":40,"t_mayor_igual":41,"t_menor_igual":42,"t_print":43,"OpcionPrint":44,"t_coma":45,"t_print_int":46,"t_print_char":47,"t_print_dec":48,"t_dospuntos":49,"t_call":50,"t_proc":51,"t_begin":52,"ContenidoProcedimiento":53,"t_end":54,"ListaSentencias":55,"Sentencia":56,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",14:"t_id",15:"t_igual",17:"t_cor_a",19:"t_cor_c",21:"t_pycoma",23:"t_entero",24:"t_decimal",27:"t_mas",28:"t_menos",29:"t_por",30:"t_dividido",31:"t_modulo",32:"t_if",33:"t_par_a",35:"t_par_c",36:"t_goto",37:"t_mayor",38:"t_menor",39:"t_dobleigual",40:"t_diferente",41:"t_mayor_igual",42:"t_menor_igual",43:"t_print",45:"t_coma",46:"t_print_int",47:"t_print_char",48:"t_print_dec",49:"t_dospuntos",50:"t_call",51:"t_proc",52:"t_begin",54:"t_end"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,3],[7,7],[16,3],[16,2],[16,2],[16,2],[25,3],[26,1],[26,1],[26,1],[26,1],[26,1],[20,2],[20,1],[20,1],[22,3],[22,0],[18,1],[18,1],[18,1],[8,9],[34,1],[34,1],[34,1],[34,1],[34,1],[34,1],[9,3],[12,7],[44,1],[44,1],[44,1],[13,2],[10,3],[11,5],[53,1],[53,0],[55,2],[55,1],[56,1],[56,1],[56,1],[56,1],[56,1],[56,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        astSentencias = $$[$0-1];
    
break;
case 2: case 49:

        $$[$0-1].push($$[$0]);
        this.$ = $$[$0-1];
    
break;
case 3:

        let listaInstrucciones = [];
        listaInstrucciones.push($$[$0]);
        this.$ = listaInstrucciones;
    
break;
case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 47: case 51: case 52: case 53: case 54: case 55: case 56:

        this.$ = $$[$0];
    
break;
case 11:

        let error = {
            tipo: "Sintactico",
            descripcion: "Se encontro el token inesperado " + yytext + ".",
            linea: this._$.first_line,
            columna: this._$.first_column
        }
        errores.push(error); 
    
break;
case 12:

        if($$[$0] instanceof NodoAsignacion){
            let destinoTipo1 = new Operando(TipoOperando.ID, $$[$0-2], null);
            this.$ = new NodoAsignacion(destinoTipo1, $$[$0].operando1, $$[$0].operando2, $$[$0].operador, this._$.first_column, this._$.first_line);   
        }
        else{
            let destinoTipo1 = new Operando(TipoOperando.ID, $$[$0-2], null);
            this.$ = new NodoAsignacion(destinoTipo1, $$[$0], null, null, this._$.first_column, this._$.first_line);   
        }
    
break;
case 13:

        let destinoTipo2 = new Operando(TipoOperando.ID, $$[$0-6], $$[$0-4]);
        this.$ = new NodoAsignacion(destinoTipo2, $$[$0-1]);
    
break;
case 14:

        this.$ = new Operando(TipoOperando.ID, $$[$0-2], $$[$0-1]);
    
break;
case 15: case 16:

        this.$ = new Operando(TipoOperando.VALOR, $$[$0-1], null);
    
break;
case 17: case 27:

        this.$ = $$[$0-1];
    
break;
case 18:

        this.$ = new NodoAsignacion(null, $$[$0-2], $$[$0], $$[$0-1], null, null);   
    
break;
case 19:

        this.$ = OperadorAritmetico.SUMA;
    
break;
case 20:

        this.$ = OperadorAritmetico.RESTA;
    
break;
case 21:

        this.$ = OperadorAritmetico.MULTIPLICACION;
    
break;
case 22:

        this.$ = OperadorAritmetico.DIVISION;
    
break;
case 23:

        this.$ = OperadorAritmetico.MODULO;
    
break;
case 24:

        this.$ = new Operando(TipoOperando.ID, $$[$0-1], $$[$0]);
    
break;
case 25: case 26: case 30: case 31:

        this.$ = new Operando(TipoOperando.VALOR, $$[$0], null);
    
break;
case 28:

        this.$ = null;
    
break;
case 29:

        this.$ = new Operando(TipoOperando.ID, $$[$0], null);
    
break;
case 32:

    this.$ = new NodoSaltoCondicional($$[$0-6], $$[$0-4], $$[$0-5], $$[$0-1], this._$.first_line, this._$.first_column);

break;
case 33:

        this.$ = OperadorLogico.MAYOR;
    
break;
case 34:

        this.$ = OperadorLogico.MENOR;
    
break;
case 35:

        this.$ = OperadorLogico.IGUAL;
    
break;
case 36:

        this.$ = OperadorLogico.DIFERENTE;
    
break;
case 37:

        this.$ = OperadorLogico.MAYOR_IGUAL;
    
break;
case 38:

        this.$ = OperadorLogico.MENOR_IGUAL;
    
break;
case 39:

    this.$ = new NodoSaltoIncondicional($$[$0-1], this._$.first_line, this._$.first_column);

break;
case 40:

    this.$ = new NodoPrint($$[$0-4], $$[$0-2], this._$.first_line, this._$.first_column);

break;
case 41:

        this.$ = TipoPrint.ENTERO;
    
break;
case 42:

        this.$ = TipoPrint.CARACTER;
    
break;
case 43:

        this.$ = TipoPrint.DECIMAL;
    
break;
case 44:

    this.$ = new NodoEtiqueta($$[$0-1], this._$.first_line, this._$.first_column);

break;
case 45:

    this.$ = new NodoLlamadaProc($$[$0-1], this._$.first_line, this._$.first_column);

break;
case 46:

    this.$ = new NodoDeclaracionProc($$[$0-3], $$[$0-1], this._$.first_line, this._$.first_column);

break;
case 48:

        this.$ = [];
    
break;
case 50:

        let listaSentencias = [];
        listaSentencias.push($$[$0]);
        this.$ = listaSentencias;
    
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,32:$V2,36:$V3,43:$V4,50:$V5,51:$V6},{1:[3]},{2:$V0,5:[1,18],6:19,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,32:$V2,36:$V3,43:$V4,50:$V5,51:$V6},o($V7,[2,3]),o($V7,[2,4]),o($V7,[2,5]),o($V7,[2,6]),o($V7,[2,7]),o($V7,[2,8]),o($V7,[2,9]),o($V7,[2,10]),o($V7,[2,11]),{15:[1,20],17:[1,21],49:[1,22]},{33:[1,23]},{14:[1,24]},{14:[1,25]},{14:[1,26]},{33:[1,27]},{1:[2,1]},o($V7,[2,2]),{14:[1,29],16:28,18:33,23:[1,30],24:[1,31],25:32},{14:$V8,18:34,23:$V9,24:$Va},o($Vb,[2,44]),{14:$V8,18:38,23:$V9,24:$Va},{21:[1,39]},{21:[1,40]},{52:[1,41]},{44:42,46:[1,43],47:[1,44],48:[1,45]},o($Vb,[2,12]),o($Vc,$Vd,{22:46,17:$Ve,21:$Vf}),o($Vc,$Vg,{21:[1,48]}),o($Vc,$Vh,{21:[1,49]}),{21:[1,50]},{26:51,27:[1,52],28:[1,53],29:[1,54],30:[1,55],31:[1,56]},{19:[1,57]},o($Vi,$Vd),o($Vi,$Vh),o($Vi,$Vg),{34:58,37:[1,59],38:[1,60],39:[1,61],40:[1,62],41:[1,63],42:[1,64]},o($Vb,[2,39]),o($Vb,[2,45]),{7:68,8:69,9:70,10:71,12:72,13:73,14:$V1,32:$V2,36:$V3,43:$V4,50:$V5,53:65,54:[2,48],55:66,56:67},{45:[1,74]},{45:[2,41]},{45:[2,42]},{45:[2,43]},{21:[1,75]},{14:$V8,18:76,23:$V9,24:$Va},o($Vb,[2,15]),o($Vb,[2,16]),o($Vb,[2,17]),{14:$V8,18:77,23:$V9,24:$Va},o($Vj,[2,19]),o($Vj,[2,20]),o($Vj,[2,21]),o($Vj,[2,22]),o($Vj,[2,23]),{15:[1,78]},{14:$V8,18:79,23:$V9,24:$Va},o($Vj,[2,33]),o($Vj,[2,34]),o($Vj,[2,35]),o($Vj,[2,36]),o($Vj,[2,37]),o($Vj,[2,38]),{54:[1,80]},{7:68,8:69,9:70,10:71,12:72,13:73,14:$V1,32:$V2,36:$V3,43:$V4,50:$V5,54:[2,47],56:81},o($Vk,[2,50]),o($Vk,[2,51]),o($Vk,[2,52]),o($Vk,[2,53]),o($Vk,[2,54]),o($Vk,[2,55]),o($Vk,[2,56]),{14:$Vl,20:82,23:$Vm,24:$Vn},o($Vb,[2,14]),{19:[1,86]},{21:[2,18]},{14:$Vl,20:87,23:$Vm,24:$Vn},{35:[1,88]},o($V7,[2,46]),o($Vk,[2,49]),{35:[1,89]},o($Vo,$Vf,{22:90,17:$Ve}),o($Vo,[2,25]),o($Vo,[2,26]),o($Vo,[2,27]),{21:[1,91]},{36:[1,92]},{21:[1,93]},o($Vo,[2,24]),o($Vb,[2,13]),{14:[1,94]},o($Vb,[2,40]),{21:[1,95]},o($Vb,[2,32])],
defaultActions: {18:[2,1],43:[2,41],44:[2,42],45:[2,43],77:[2,18]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
break;
case 1:
break;
case 2:
break;
case 3:return 24;
break;
case 4:return 23;
break;
case 5:return 36;
break;
case 6:return 32;
break;
case 7:return 51;
break;
case 8:return 52;
break;
case 9:return 54;
break;
case 10:return 50;
break;
case 11:return 43;
break;
case 12:return 47;
break;
case 13:return 46;
break;
case 14:return 48;
break;
case 15:return 49;
break;
case 16:return 21;
break;
case 17:return 45;
break;
case 18:return 33;
break;
case 19:return 35;
break;
case 20:return 17;
break;
case 21:return 19;
break;
case 22:return 27;
break;
case 23:return 28;
break;
case 24:return 29;
break;
case 25:return 30;
break;
case 26:return 31;
break;
case 27:return "t_menor_igual";
break;
case 28:return "t_mayor_igual";
break;
case 29:return 39;
break;
case 30:return "t_diferente";
break;
case 31:return "t_mayor";
break;
case 32:return "t_menor";
break;
case 33:return "t_igual";
break;
case 34:
break;
case 35:
break;
case 36:return 14;
break;
case 37:return 5;
break;
case 38: 
        let error = {
            tipo: "Lexico",
            descripcion: "Se encontro el caracter " + yy_.yytext + " no esperado.",
            linea: yy_.yylloc.first_line,
            columna: yy_.yylloc.first_column
        }
        errores.push(error);
    
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[\/][*][^*]*[*]+([^\/*][^*]*[*]+)*[\/])/i,/^(?:-?[0-9]+(\.[0-9]+)?\b)/i,/^(?:-?[0-9]+\b)/i,/^(?:goto\b)/i,/^(?:if\b)/i,/^(?:proc\b)/i,/^(?:begin\b)/i,/^(?:end\b)/i,/^(?:call\b)/i,/^(?:print\b)/i,/^(?:%c\b)/i,/^(?:%i\b)/i,/^(?:%d\b)/i,/^(?::)/i,/^(?:;)/i,/^(?:,)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:<>)/i,/^(?:>)/i,/^(?:<)/i,/^(?:=)/i,/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:([a-zA-Z_])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}