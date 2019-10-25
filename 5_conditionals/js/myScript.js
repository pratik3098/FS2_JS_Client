try {
var wordsArray = ['Toronto', 'Vancouver', 'Montreal','TerraceBay','Thunderbay'];
var numArray = [17,34,43,67];
var num = 34;
var letter = 'T';
wordsArray.forEach((element, index) => {
    var wordsListContainer = document.getElementById("wordList");
    document.getElementById('wordListDesp').innerHTML = "List displaying the words starting with " + letter;
    if (element.startsWith(letter)){
    var listTag = document.createElement('li');
    var text_node = document.createTextNode(element);
    listTag.appendChild(text_node);
    wordsListContainer.appendChild(listTag);}
    });

    numArray.forEach((element, index) => {
        var numListContainer = document.getElementById("numList");
        if (element > num){
            document.getElementById('numListDesp').innerHTML = "List displaying the numbers greater than " + num;
            var listTag = document.createElement('li');
            var text_node  = document.createTextNode(element);
            listTag.appendChild(text_node);
            numListContainer.appendChild(listTag);
        } else if (element <=num) {
            document.getElementById('numListDesp').innerHTML = "List displaying the numbers less than or equal than " + num;
            var listTag = document.createElement('li');
            var listTagtext = document.createTextNode(element);
            listTag.appendChild(listTagtext);
            numListContainer.appendChild(listTag);
        }
    });

} catch (error) {
    console.log("Error: " + error);
}