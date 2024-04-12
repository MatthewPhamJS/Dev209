let text = "<ul>"
let words = []
// Looping
for (let i=0; i < 3; i++) {
    let person = words.push(prompt("Please enter a word."));
    // Creating an unordered list
    text += "<li>" + words[i] + "</li>";
}
text += "</ul>"

// Display Array in UL content
let final = document.getElementById("display").innerHTML = text;

// Caps
let newArray = words.map(capsFunction)

function capsFunction(newArray) {
    return newArray.toUpperCase()
}

// Red
document.getElementById("red").addEventListener("click", function(){ final.style.color = 'red'; })

// Swap
let secondArray = words.map;
function swap() {
    let newText = secondArray.charAt(secondArray.length - 1) + secondArray.substring(1, secondArray.length - 1) + secondArray.charAt( 0);
    text = newText;
    document.getElementsByName("swap").innerHTML = newText;
}
