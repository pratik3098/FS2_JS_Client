function welcome_msg(){
var container = document.getElementById("container-1");
var header2 = document.createElement("h2");
var text_node=document.createTextNode("Welcome User!");
header2.appendChild(text_node);
container.appendChild(header2);
}

function page1_function(){
var container = document.getElementById("container-2");
var header2 = document.createElement("h2");
var text_node=document.createTextNode("Hi you are on page 1!");
header2.appendChild(text_node);
container.appendChild(header2);
}
function page2_function(){
    var container = document.getElementById("container-3");
    var header2 = document.createElement("h2");
    var text_node=document.createTextNode("Hi you are on page 2!");
    header2.appendChild(text_node);
    container.appendChild(header2);
}