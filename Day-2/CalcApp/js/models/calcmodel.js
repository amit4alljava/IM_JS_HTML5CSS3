var calcObject = {
add:function (firstNo, secondNo){
    return parseInt(firstNo) + parseInt(secondNo);
},

subtract:function (firstNo, secondNo){
    return parseInt(firstNo) - parseInt(secondNo);
},

multiply:function (firstNo, secondNo){
    return parseInt(firstNo) * parseInt(secondNo);
},

divide:function (firstNo, secondNo){
    return parseInt(firstNo) / parseInt(secondNo);
}

}

function execute(firstNumber,secondNumber,operator){
    var expression = firstNumber + operator + secondNumber;
    var result = eval(expression);
    return result;
}