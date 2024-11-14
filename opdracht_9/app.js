let count = 0;

function incrementCounter() {
    count++; //count = count + 1;
    if (count > 10) {
        count = 0;
    }
    document.getElementById("counter").innerText = count;
}