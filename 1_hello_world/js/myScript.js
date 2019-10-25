
function welcome_msg(){
var container = document.getElementById("container-1");
var header2 = document.createElement("h2");
var text_node=document.createTextNode("Hello World!");
header2.appendChild(text_node);
container.appendChild(header2);
}