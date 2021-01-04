const elements = document.getElementsByClassName("dice-block");
const display_element = document.getElementById("rolled-value");
const synth = window.speechSynthesis;

function roll_dice() {
    let rolled = get_random(this.getAttribute("data-sides"))
    update_rolled(rolled);
    talk(synth, rolled);
}

function get_random(max) {
    return Math.floor(Math.random() * (Math.floor(max) - 1) + 1);
}

function update_rolled(val) {display_element.textContent = val;}

function talk(synth, words) {
    let utterance = new SpeechSynthesisUtterance(words);
    utterance.rate = 1;
    synth.speak(utterance);
}

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', roll_dice, false)
}