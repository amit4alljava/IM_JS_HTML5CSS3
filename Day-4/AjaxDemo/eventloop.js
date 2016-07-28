function doAjax(url,fn,method,params){
    var xmlhttp = new window.XMLHttpRequest();
    xmlhttp.open(method,url,true);
    xmlhttp.send(params); //"userid=ram&name=abcd"
    xmlhttp.onreadystatechange=function(){
        alert("Ready State "+xmlhttp.readyState+" Status "+xmlhttp.status);
        if(xmlhttp.status==200 && xmlhttp.readyState==4){
           fn();
            // console.log("Ajax Output is "+xmlhttp.responseText);
            //console.log("Type of ",typeof xmlhttp.responseText);
            //var object = JSON.parse(xmlhttp.responseText);
            //document.getElementById("count").innerHTML = "I.P is "+object.ip+" Country Name "+object.country_name;
        }
    }
}


function start(){
    console.log("Start Call");
}
function process(){
    console.log("Process Start")
    for(var i = 1; i<=100000; i++){
        for(var j = 1; j<=100000; j++){
            
        }
    }
    console.log("Process Done....");
}
function end(){
    console.log("End Call");
}

function doWork(){
    start();
    setTimeout(process,5000);
    end();
}
var a = 1;
function count(){
    
    document.getElementById("count").innerHTML=a;
    a++;
}