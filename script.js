var elements = document.getElementsByClassName("dice-block");
var display_element = document.getElementById("rolled-value");

const synth = window.speechSynthesis;

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();

recognition.onresult = (e) {
    const speechToText = e.results[0][0].transcript;

}
recognition.start();

function roll_dice() {
    var rolled = get_random(this.getAttribute("data-sides"))
    update_rolled(rolled);
    talk(rolled);
}

function get_random(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 1) + 1);
}

function update_rolled(val) {
    display_element.textContent = val;
}

function talk(words) {
    let utterance = new SpeechSynthesisUtterance("You rolled a " + words);
    utterance.lang = "en-GB";
    utterance.rate = 1;
    synth.speak(utterance);
    
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', roll_dice, false)
}