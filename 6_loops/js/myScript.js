try {
    var wordsArray = ['Toronto', 'Vancouver', 'Montreal','TerraceBay','Thunderbay','Calgary','Alberta'];
    var numArray = [17,34,43,67,100,23,56,22];
    wordsArray.forEach((element, index) => {
        var wordsListContainer = document.getElementById("wordList");
        document.getElementById('wordListDesp').innerHTML = "List displaying the cities:\n ";
        var listTag = document.createElement('li');
        var text_node = document.createTextNode(element);
        listTag.appendChild(text_node);
        wordsListContainer.appendChild(listTag);
        });
    
        numArray.forEach((element, index) => {
            var numListContainer = document.getElementById("numList");
                document.getElementById('numListDesp').innerHTML = "List displaying the numbers:\n";
                var listTag = document.createElement('li');
                var text_node  = document.createTextNode(element);
                listTag.appendChild(text_node);
                numListContainer.appendChild(listTag);
        });
    
    } catch (error) {
        console.log("Error: " + error);
    }