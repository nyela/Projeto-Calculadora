var prival = 0;
var newval = 0;
var operador = "";
var result = 0;

$('.numeral').click(function () {
    var box = $(this).val();
    prival = (parseInt(prival) * 10) + parseInt(box);
    $(".painel").val(prival);
});

$('.operacao').click(function () {
    var box = $(this).val();
    operador = box;
    $(".painel").val(box);
    newval = prival;
    prival = 0;
});

$('.result').click(function () {
    switch (operador) {
        case "+":
            result = parseInt(newval) + parseInt(prival);
            break;
        case "-":
            result = parseInt(newval) - parseInt(prival);
            break;
        case "*":
            result = parseInt(newval) * parseInt(prival);
            break;
        case "/":
            result = parseInt(newval) / parseInt(prival);
            break;
    }
    console.log(result);
    console.log(newval + " " + operador + " " + prival + " = " + result);
    $(".painel").val(result);
});