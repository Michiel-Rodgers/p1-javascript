let budget = 100

let product = prompt("hoe duur is uw product?");

if (budget >= product) {
    document.getElementById("message").textContent = "U heeft genoeg geld!";
    document.getElementById("message").style.color = "green";
    alert("U heeft genoeg geld!")
} 
else {
    document.getElementById("message").textContent = "Helaas, te weinig geld!";
    document.getElementById("message").style.color = "red";
}