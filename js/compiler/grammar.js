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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,10],$V1=[1,11],$V2=[1,12],$V3=[1,13],$V4=[1,16],$V5=[1,14],$V6=[1,15],$V7=[2,5,13,32,36,44,50,51],$V8=[1,33],$V9=[1,35],$Va=[1,34],$Vb=[2,5,13,32,36,44,50,51,54],$Vc=[24,25,26,27,28],$Vd=[2,30],$Ve=[2,32],$Vf=[2,31],$Vg=[18,19,35,38,39,40,41,42,43],$Vh=[13,20,21],$Vi=[13,32,36,44,50,54];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"Inicial":3,"Instrucciones":4,"EOF":5,"Instruccion":6,"Asignacion":7,"SaltoCondicional":8,"SaltoIncondicional":9,"LlamadaAProcedimiento":10,"DeclaracionProcedimiento":11,"Imprimir":12,"t_id":13,"t_igual":14,"Asignando":15,"t_cor_a":16,"OperandoSimple":17,"t_cor_c":18,"t_pycoma":19,"t_entero":20,"t_decimal":21,"Operacion":22,"Operador":23,"t_mas":24,"t_menos":25,"t_por":26,"t_dividido":27,"t_modulo":28,"OperandoCompuesto":29,"Acceso":30,"Indice":31,"t_if":32,"t_par_a":33,"Condicion":34,"t_par_c":35,"t_goto":36,"OperadorLogico":37,"t_mayor":38,"t_menor":39,"t_dobleigual":40,"t_diferente":41,"t_mayor_igual":42,"t_menor_igual":43,"t_print":44,"OpcionPrint":45,"t_coma":46,"t_print_int":47,"t_print_char":48,"t_print_dec":49,"t_call":50,"t_proc":51,"t_begin":52,"ContenidoProcedimiento":53,"t_end":54,"ListaSentencias":55,"Sentencia":56,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",13:"t_id",14:"t_igual",16:"t_cor_a",18:"t_cor_c",19:"t_pycoma",20:"t_entero",21:"t_decimal",24:"t_mas",25:"t_menos",26:"t_por",27:"t_dividido",28:"t_modulo",32:"t_if",33:"t_par_a",35:"t_par_c",36:"t_goto",38:"t_mayor",39:"t_menor",40:"t_dobleigual",41:"t_diferente",42:"t_mayor_igual",43:"t_menor_igual",44:"t_print",46:"t_coma",47:"t_print_int",48:"t_print_char",49:"t_print_dec",50:"t_call",51:"t_proc",52:"t_begin",54:"t_end"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,3],[7,7],[15,2],[15,2],[15,2],[15,2],[22,3],[23,1],[23,1],[23,1],[23,1],[23,1],[29,2],[29,1],[29,1],[30,3],[30,0],[31,1],[31,1],[17,1],[17,1],[17,1],[8,7],[34,3],[37,1],[37,1],[37,1],[37,1],[37,1],[37,1],[9,3],[12,7],[45,1],[45,1],[45,1],[10,3],[11,5],[53,1],[53,0],[55,2],[55,1],[56,1],[56,1],[56,1],[56,1],[56,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        astSentencias = $$[$0-1];
    
break;
case 2: case 50:

        $$[$0-1].push($$[$0]);
        this.$ = $$[$0-1];
    
break;
case 3:

        let listaInstrucciones = [];
        listaInstrucciones.push($$[$0]);
        this.$ = listaInstrucciones;
    
break;
case 4: case 5: case 6: case 7: case 8: case 9: case 48: case 52: case 53: case 54: case 55: case 56:

        this.$ = $$[$0];
    
break;
case 10:

        let error = {
            tipo: "Sintactico",
            descripcion: "Se encontro el token inesperado " + yytext + ".",
            linea: this._$.first_line,
            columna: this._$.first_column
        }
        errores.push(error); 
    
break;
case 23:

        this.$ = new Operando(TipoOperando.ID, $$[$0-1], null);
    
break;
case 24: case 25: case 29: case 31: case 32:

        this.$ = new Operando(TipoOperando.VALOR, $$[$0], null);
    
break;
case 26:

        this.$ = $$[$0-1];
    
break;
case 27:

        this.$ = null;
    
break;
case 28: case 30:

        this.$ = new Operando(TipoOperando.ID, $$[$0], null);
    
break;
case 42:

    this.$ = new NodoPrint($$[$0-4], $$[$0-2], this._$.first_line, this._$.first_column);

break;
case 43:

        this.$ = TipoPrint.ENTERO;
    
break;
case 44:

        this.$ = TipoPrint.CARACTER;
    
break;
case 45:

        this.$ = TipoPrint.DECIMAL;
    
break;
case 46:

    this.$ = new NodoLlamadaProc($$[$0-1], this._$.first_line, this._$.first_column);

break;
case 47:

    this.$ = new NodoDeclaracionProc($$[$0-3], $$[$0-1], this._$.first_line, this._$.first_column);

break;
case 49:

        this.$ = [];
    
break;
case 51:

        let listaSentencias = [];
        listaSentencias.push($$[$0]);
        this.$ = listaSentencias;
    
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:$V1,32:$V2,36:$V3,44:$V4,50:$V5,51:$V6},{1:[3]},{2:$V0,5:[1,17],6:18,7:4,8:5,9:6,10:7,11:8,12:9,13:$V1,32:$V2,36:$V3,44:$V4,50:$V5,51:$V6},o($V7,[2,3]),o($V7,[2,4]),o($V7,[2,5]),o($V7,[2,6]),o($V7,[2,7]),o($V7,[2,8]),o($V7,[2,9]),o($V7,[2,10]),{14:[1,19],16:[1,20]},{33:[1,21]},{13:[1,22]},{13:[1,23]},{13:[1,24]},{33:[1,25]},{1:[2,1]},o($V7,[2,2]),{13:[1,27],15:26,17:31,20:[1,28],21:[1,29],22:30},{13:$V8,17:32,20:$V9,21:$Va},{13:$V8,17:37,20:$V9,21:$Va,34:36},{19:[1,38]},{19:[1,39]},{52:[1,40]},{45:41,47:[1,42],48:[1,43],49:[1,44]},o($Vb,[2,11]),o($Vc,$Vd,{19:[1,45]}),o($Vc,$Ve,{19:[1,46]}),o($Vc,$Vf,{19:[1,47]}),{19:[1,48]},{23:49,24:[1,50],25:[1,51],26:[1,52],27:[1,53],28:[1,54]},{18:[1,55]},o($Vg,$Vd),o($Vg,$Vf),o($Vg,$Ve),{35:[1,56]},{37:57,38:[1,58],39:[1,59],40:[1,60],41:[1,61],42:[1,62],43:[1,63]},o($Vb,[2,41]),o($Vb,[2,46]),{7:67,8:68,9:69,10:70,12:71,13:$V1,32:$V2,36:$V3,44:$V4,50:$V5,53:64,54:[2,49],55:65,56:66},{46:[1,72]},{46:[2,43]},{46:[2,44]},{46:[2,45]},o($Vb,[2,13]),o($Vb,[2,14]),o($Vb,[2,15]),o($Vb,[2,16]),{13:$V8,17:73,20:$V9,21:$Va},o($Vh,[2,18]),o($Vh,[2,19]),o($Vh,[2,20]),o($Vh,[2,21]),o($Vh,[2,22]),{14:[1,74]},{36:[1,75]},{13:$V8,17:76,20:$V9,21:$Va},o($Vh,[2,35]),o($Vh,[2,36]),o($Vh,[2,37]),o($Vh,[2,38]),o($Vh,[2,39]),o($Vh,[2,40]),{54:[1,77]},{7:67,8:68,9:69,10:70,12:71,13:$V1,32:$V2,36:$V3,44:$V4,50:$V5,54:[2,48],56:78},o($Vi,[2,51]),o($Vi,[2,52]),o($Vi,[2,53]),o($Vi,[2,54]),o($Vi,[2,55]),o($Vi,[2,56]),{13:[1,80],20:[1,82],21:[1,81],29:79},{19:[2,17]},{13:$V8,17:83,20:$V9,21:$Va},{13:[1,84]},{35:[2,34]},o($V7,[2,47]),o($Vi,[2,50]),{35:[1,85]},{16:[1,87],30:86,35:[2,27]},{35:[2,24]},{35:[2,25]},{19:[1,88]},{19:[1,89]},{19:[1,90]},{35:[2,23]},{13:[1,92],20:[1,93],31:91},o($Vb,[2,12]),o($Vb,[2,33]),o($Vb,[2,42]),{18:[1,94]},{18:[2,28]},{18:[2,29]},{35:[2,26]}],
defaultActions: {17:[2,1],42:[2,43],43:[2,44],44:[2,45],73:[2,17],76:[2,34],81:[2,24],82:[2,25],86:[2,23],92:[2,28],93:[2,29],94:[2,26]},
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
case 3:return 21;
break;
case 4:return 20;
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
case 11:return 44;
break;
case 12:return "t_stack";
break;
case 13:return "t_heap";
break;
case 14:return 48;
break;
case 15:return 47;
break;
case 16:return 49;
break;
case 17:return 't_dospuntos';
break;
case 18:return 19;
break;
case 19:return 46;
break;
case 20:return 33;
break;
case 21:return 35;
break;
case 22:return 16;
break;
case 23:return 18;
break;
case 24:return 24;
break;
case 25:return 25;
break;
case 26:return 26;
break;
case 27:return 27;
break;
case 28:return 28;
break;
case 29:return "t_menor_igual";
break;
case 30:return "t_mayor_igual";
break;
case 31:return 40;
break;
case 32:return "t_diferente";
break;
case 33:return "t_mayor";
break;
case 34:return "t_menor";
break;
case 35:return "t_igual";
break;
case 36:
break;
case 37:
break;
case 38:return 13;
break;
case 39:return 5;
break;
case 40: 
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
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[\/][*][^*]*[*]+([^\/*][^*]*[*]+)*[\/])/i,/^(?:-?[0-9]+(\.[0-9]+)?\b)/i,/^(?:-?[0-9]+\b)/i,/^(?:goto\b)/i,/^(?:if\b)/i,/^(?:proc\b)/i,/^(?:begin\b)/i,/^(?:end\b)/i,/^(?:call\b)/i,/^(?:print\b)/i,/^(?:stack\b)/i,/^(?:heap\b)/i,/^(?:%c\b)/i,/^(?:%i\b)/i,/^(?:%d\b)/i,/^(?::)/i,/^(?:;)/i,/^(?:,)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:<>)/i,/^(?:>)/i,/^(?:<)/i,/^(?:=)/i,/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:([a-zA-Z_])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":true}}
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