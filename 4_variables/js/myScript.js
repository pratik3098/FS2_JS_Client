try {
var stringArray = ['Apple', 'Mango', 'Grape'];
var numArray = [12, 3, 9];
var container = document.getElementById('container-1');
var list = document.getElementById('list');
stringArray.forEach((element, index) => {
var listTag = document.createElement('li');
var text_node = document.createTextNode(numArray[index] + " " + element);
listTag.appendChild(text_node);
list.appendChild(listTag);
});
    console.log("Success!");
} 
catch (error) {
    console.log("Error: " + error);
}