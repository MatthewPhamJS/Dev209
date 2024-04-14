// Creating an unordered list.
let text = "<ul>"
let words = []
// Using a for loop to get three objects that users enter.
for (let i=0; i < 3; i++) {
    let person = words.push(prompt("Please enter a word."));
    text += "<li>" + words[i] + "</li>";
}
text += "</ul>"

// Display Array in list content
let final = document.getElementById("display").innerHTML = text;

// Caps Function
// Calls to the onclick function in the HTML file.
function capsFunction() {
    // Creates a new array using map feature.
    // Creates a new list, including capitalizing the new Array and joining it together.
    let capArray = words.map(caps => `<li>${caps.toUpperCase()}</li>`).join('');
    // Replace the old array display with a new one.
    let capsUpdate = document.getElementById("display").innerHTML = capArray;
}

// Red Function 
// Creates an anonymous function. 
document.getElementById("red").addEventListener("click", function()
    { 
        let redElement = document.getElementById("display")
        if(redElement.classList.contains('color') ){
            redElement.classList.remove('color')
        }
        redElement.classList.add('secondcolor')
})

// Swap Function
// Calls the function by its name.
function buttonEvent1() {
    document.getElementById("display").innerHTML = swap();
}

function swap() {
    // Returns a new Array using map feature.
    return newText = words.map(change => `<li>${change.charAt(change.length - 1) 
        + change.substring(1, change.length - 1) 
        + change.charAt( 0)}</li>`).join('');
    
}
