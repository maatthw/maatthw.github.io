let row = 1;
let col = 1;
let canplay = true;

let wordList = [
    ["b", "r", "a", "i", "n"],
    ["t", "i", "g", "e", "r"],
    ["h", "e", "a", "r", "t"],
    ["s", "p", "i", "r", "e"],
    ["c", "o", "a", "c", "h"],
    ["s", "t", "o", "n", "e"],
    ["f", "l", "a", "m", "e"],
    ["s", "w", "e", "e", "t"],
    ["g", "l", "o", "v", "e"],
    ["c", "r", "a", "f", "t"],
    ["s", "t", "a", "r", "t"],
    ["b", "r", "e", "a", "d"],
    ["s", "h", "i", "p", "s"],
    ["s", "t", "o", "r", "m"],
    ["c", "o", "u", "n", "t"],
    ["s", "t", "o", "p", "s"],
    ["s", "t", "a", "r", "s"],
    ["s", "t", "o", "n", "e"],
    ["s", "t", "o", "r", "y"],
    ["s", "t", "o", "p", "s"]
];

const word = wordList[Math.floor(Math.random() * array.length)];

function displayLetter(letter, box) {
    let outputDiv = document.getElementById(box);
    let content = letter.toLowerCase();

    outputDiv.classList.remove("green-box", "yellow-box", "gray-box");

    outputDiv.classList.add("default-box");
    outputDiv.classList.add("box-pop");

    setTimeout(() => {
        output.classList.remove("box-pop");
    }, 300);

    outputDiv.textContent = letter;
}

document.addEventListener('DOMContentLoaded', function() {

    let keys = document.querySelectorAll(".letter")

    keys.forEach(function(key) {
        key.addEventListener("click", function() {
            if (!canplay) {
                alert("Refresh the page.")
            }

            else {
            if (key.id == "enter"){
                if (col > word.length) {
                    checkWord();
                    if (row < 6) {
                    row++;
                    col = 1;
                    }
                }
            }

            else if (key.id === "backspace"){
                if (col > 1){
                    col--;
                    let boxId = `box${row}${col}`;
                    let box = document.getElementById(boxId);
                    box.classList.remove("green-box", "yellow-box", "gray-box");
                    box.textContent = "";
                    box.classList.remove("box-pop");

                }
            }
            else {

                if (col <= word.length) {
                    let boxId = `box${row}${col}`;
                    displayLetter(key.textContent, boxId);
                    col++;
                }
            }

        }});
    });
});

function checkWord() {

    let count = 0;
    let rowLetters= [];

    for (let i = 1; i <= word.length; i++){
        let boxId = `box${row}${i}`;
        let box = document.getElementById(boxId);
        rowLetters.push(box.textContent.toLowerCase());
    }

    rowLetters.forEach((letter, index) => {
        let boxId = `box${row}${index + 1}`;
        let box = document.getElementById(boxId);
        box.classList.remove("green-box", "yellow-box", "gray-box");

        if (letter === word[index]) {
            box.classList.add("green-box");
            let letterK = document.getElementById(letter.toUpperCase());
            letterK.classList.add("green-letter");
            count++;
        }
        else if (word.includes(letter)){
            box.classList.add("yellow-box");
            let letterK = document.getElementById(letter.toUpperCase());
            letterK.classList.add("yellow-letter");
        }
        else {
            box.classList.add("gray-box");
            let letterK = document.getElementById(letter.toUpperCase());
            letterK.classList.add("dark-letter");
        }
    })

    if (count === 5){
        alert("You have won!");
        canplay = false;
    }

    else if (row === 6) {
        alert(`Game Over. The word was: ${word.toString()}`)
    }
}