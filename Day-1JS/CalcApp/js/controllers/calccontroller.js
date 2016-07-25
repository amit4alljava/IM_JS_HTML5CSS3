window.addEventListener("load",init);
function init(){
var buttons = document.getElementsByTagName("button");
    for(var i = 0 ; i<buttons.length; i++){
        buttons[i].addEventListener("click",doOperation);
    }
document.getElementById("firstno").addEventListener("keyup",validate);
document.getElementById("secondno").addEventListener("keyup",validate);    
}

function doOperation(){
var firstNo = document.getElementById("firstno").value;
    var secondNo = document.getElementById("secondno").value;
var buttonValue = this.innerHTML;
    var result = 0;
//console.log("Button Value is ",buttonValue);
if(buttonValue=="+"){
    result = add(firstNo,secondNo);
}    
else
if(buttonValue=="-"){
    result = subtract(firstNo,secondNo);
}   
    document.getElementById("result").innerHTML = result;
}

function validate(){
    var txtValue = this.value;
    var id = this.id;
    var message = isNaN(parseInt(txtValue))?"Invalid Number":"";
    document.getElementById(id+"_error").innerHTML=message;
}