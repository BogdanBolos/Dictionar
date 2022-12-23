document.getElementById("add").onclick = function() {
    var text = document.getElementById("input").value;
    var li = "<li>" + text + "</li>";
    if (checkWord(text) == 1) {
        document.getElementById("list").innerHTML += li;
        document.getElementById("input").value = "";
    } else {
        alert("This word already exists in the list");
        document.getElementById("input").value = "";
    }
}

function checkWord(text) {
    var word = document.getElementById("list");
    var wordListLi = word.getElementsByTagName("li");
    for (var i = 0; i < wordListLi.length; i++) {
        if (text === wordListLi[i].textContent) {
           return 0;
        }
    }
    return 1;
}
