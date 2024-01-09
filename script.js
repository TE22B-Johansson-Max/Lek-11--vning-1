function add() {
    let saker_fält = document.querySelector("#saker")
    const saker = saker_fält.value
    let ul = document.querySelector(".lista")
    let li = document.createElement("li")
    li.textContent = saker;
    ul.appendChild(li);
    saker_fält.value = "";
    saker_fält.focus();
}