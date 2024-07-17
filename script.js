const getValue = document.querySelector("#value");

function increment() {
    let value = parseInt(getValue.innerHTML);
    value++;
    document.querySelector("#value").innerHTML = value;
}

function decrement() {
    let value = parseInt(getValue.innerHTML);
    value--;
    document.querySelector("#value").innerHTML = value;
}

function reset() {
    getValue.innerHTML = 0;
}

