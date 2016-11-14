/**
 * Created by userman on 11/14/16.
 */

var target = 0;
var color_text = "";
var color = 0;
var guesses = 0;
var colors = ["blue", "cyan", "gold", "grey", "green", "magenta", "orange", "red", "white", "yellow"];
var finished = false;

function do_game() {
    target = Math.floor(Math.random() * 10) + 1;
    console.log(target)
    while (!finished) {
        guesses += 1;
        color_text = prompt("I am thinking of one of this colors:\n\n blue, cyan, gold,grey, green, magenta, orange, red, white, yellow\n\n What color am I thinking of ?");
        color = colors.indexOf(color_text) + 1;
        console.log("color: " + color)
        finished = check_guess();
    }
}

function check_guess() {
    console.log("check target: " + target)
    console.log("check color: " + color)
    console.log("check color: " + color_text)

    if (color == 0) {
        alert("Sorry, I don't recognize your color.\n\nPlease try again.");
        return false;
    }
    if (color > target) {
        alert("Sorry, your guess is not correct\n\nHint: your color is alphabetically higher than mine.");
        return false;
    }
    if (color < target) {
        alert("Sorry, your guess is not correct\n\nHint: your color is alphabetically lower than mine.");
        return false;
    }
    alert("Congratulations! You have guessed the color!\n\nIt took you " + guesses + " guesses to finish the game!\n\nYou can see the color in background.");
    document.body.style.backgroundColor = color_text;
    return true;
}
