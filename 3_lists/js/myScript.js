try {
window.onloadend = userAlertMsg();
var citiesList = document.getElementById('citiesList').innerText;
var fruitsList = document.getElementById('fruitsList').innerText;
var animalList = document.getElementById('animalList').innerText;
function userAlertMsg() {
    setTimeout(() => {
    alertMsg = "List of cities: \n" + citiesList;
    alertMsg += "\n\nList of Fruits: \n" + fruitsList;
    alertMsg += "\n\nList of animals: \n" + animalList;
    alert(alertMsg);}, 1000);
    }

console.log("Lists display successful!");

} 
catch (error) {
    console.log("Error: " + error.message);
}