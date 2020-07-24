$(function () {
    //Adding line numbers to textarea
    $(".lined").linedtextarea();

    var textArea = $("#txt-editor");
    var btnRun = $("#btn-run");
    btnRun.click(function(){
        let txtConsola = $("#console");
        txtConsola.val(analizar(textArea.val()));
    });

});
