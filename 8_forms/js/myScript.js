var fName;
var lName;
var email;

try {
function submitData(){
   
    fName=document.getElementById("fName").value;
    localStorage.setItem("fName", fName);
    lName=document.getElementById("lName").value;
    localStorage.setItem("lName", lName);
    email=document.getElementById("email").value;
    localStorage.setItem("email", email);
    window.location.href="./profile.html";
}
}
catch(error){
    console.log("Error: " + error);
}

function postdata(){
    var container = document.getElementById("container-1");
    var header2 = document.createElement("h2");
    var text_node=document.createTextNode("FirstName:"+ localStorage.getItem("fName"));
    header2.appendChild(text_node);
    container.appendChild(header2);
    text_node=document.createTextNode("LastName:"+ localStorage.getItem("lName"));
    header2 = document.createElement("h2");
    header2.appendChild(text_node);
    container.appendChild(header2);
    text_node=document.createTextNode("Email:"+ localStorage.getItem("email"));
    header2 = document.createElement("h2");
    header2.appendChild(text_node);
    container.appendChild(header2);
}