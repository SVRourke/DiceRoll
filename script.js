var elements = document.getElementsByClassName("dice-block");
var display_element = document.getElementById("rolled-value");

var roll_dice = function() {
    var attribute = this.getAttribute("data-sides");
    update_rolled(get_random(attribute));
}

function get_random(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 1) + 1);
}

function update_rolled(val) {
    display_element.textContent = val;
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', roll_dice, false)
}


