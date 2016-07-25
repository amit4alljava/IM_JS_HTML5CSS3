window.addEventListener("load",init);
function init(){
alert("Script Start...");
document.getElementById("greetBt").addEventListener("click",greet);
}
function greet(){
        var firstName = initCap(document.getElementById("firstname").value);
        var lastName = initCap(document.getElementById("lastname").value);
        document.getElementById("message").innerHTML= "Welcome "+firstName+" "+lastName;
    }
        function clearMsg(){
            console.log("Clear Call");
            document.getElementById("firstname").value="";
            document.getElementById("lastname").value="";
            document.getElementById("message").innerHTML="";
            
        }