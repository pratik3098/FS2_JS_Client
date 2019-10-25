try{
var title = document.getElementsByTagName('title')[0];
title.innerHTML = "Task: 2_outputting";
var container = document.getElementById("container-1");
var header2 = document.createElement("h2");
var text_node=document.createTextNode("Welcome User!");
header2.appendChild(text_node);
container.appendChild(header2);
}
catch(error){
   document.getElementById("container-1").innerHTML = error.message;
}
finally {
     console.log("OK");
}