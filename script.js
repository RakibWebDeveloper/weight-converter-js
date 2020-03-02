inputWeight = document.getElementById("lbs-input");



inputWeight.addEventListener("input", function(e) {
    let pounds = e.target.value;
    document.getElementById("gramsOutput").innerText = (pounds/0.0022046).toFixed(3);
    document.getElementById("kgsOutput").innerText = (pounds/2.2046).toFixed(3);
    document.getElementById("ouncesOutput").innerText = (pounds/16).toFixed(3);
})