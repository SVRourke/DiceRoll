var elements = document.getElementsByClassName("dice-block");
var display_element = document.getElementById("rolled-value");

function roll_dice() {
    var synth = window.speechSynthesis;
    var rolled = get_random(this.getAttribute("data-sides"))
    update_rolled(rolled);
    talk(synth, rolled);
}

function get_random(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max) + 1);
}

function update_rolled(val) {
    display_element.textContent = val;
}

function talk(synth, words) {
    var utterance = new SpeechSynthesisUtterance(words);
    utterance.rate = 1;
    synth.speak(utterance);
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', roll_dice, false)
}