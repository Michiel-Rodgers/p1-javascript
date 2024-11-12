function changeColor() {
    console.log("de functie werkt");

    const title = document.getElementById("title");

    title.innerText = "Inhoud aangepast!";

    title.style.color = "red";
}

// Roep de functie aan zonder een argument
changeColor();
