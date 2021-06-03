const elements = document.getElementsByClassName("dice-block");
var display = document.getElementById("rolled-value");
var synth = window.speechSynthesis;

function roll_dice() {
    let rolled = get_random(this.dataset['sides'])
    display.textContent = rolled
    talk(rolled);
}

function get_random(max) {
    return Math.floor(Math.random() * (Math.floor(max) - 1) + 1);
}

function talk(words) {
    let utterance = new SpeechSynthesisUtterance(words);
    utterance.rate = 1;
    synth.speak(utterance);
}

for (const element of elements) {
    element.addEventListener('click', roll_dice, false)
}