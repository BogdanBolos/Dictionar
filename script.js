function checkWord(li) {
    if (li == document.getElementById("list").innerHTML) {
        return 1;
    }
    return 0;
}

document.getElementById("add").onclick = function() {
    var text = document.getElementById("input").value;
    var li = "<li>" + text + "</li>";
    if (checkWord(li) == 1) {
        document.getElementById("list").innerHTML += li;
        document.getElementById("input").value = "";
    }
}

function checkWord(li) {
    var wordList = document.getElementById("input");
    var wordListLi = wordList.getElementsByTagName("list");
    for (var i = 0; i < wordListLi.length; i++) {
        if (li === wordListLi[i].textContent) {
           return 1;
           console.log("works");
        }
    }
}
