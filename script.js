document.getElementById("add").onclick = function() {
    var text = document.getElementById("input").value;
    var li = "<li>" + text + "</li>";
    if (checkWord(li) == 1) {
        document.getElementById("list").innerHTML += li;
        document.getElementById("input").value = "";
    }
}
