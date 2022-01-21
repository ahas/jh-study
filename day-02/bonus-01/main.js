var button = document.getElementById("button");
var p = document.getElementById("p");
var num = 0;

function updateCount() {
    p.innerHTML = "카운트: " + num;
}

button.onclick = function () {
    num++;
    updateCount();
};
