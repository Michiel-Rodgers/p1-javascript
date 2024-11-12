let budget = 100
let product = 60

if (budget >= product) {
    document.getElementById("message").textContent = "U heeft genoeg geld";
    document.getElementById("message").style.color = "green";
} else {
    document.getElementById("message").textContent = "Helaas, te weinig geld!";
}