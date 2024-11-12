let title = document.getElementById("title");

function changeText() {
    console.log("De functie werkt!");
    changeText();
}

function changeText() {
    title.innerText = "Inhoud aangepast!";
}