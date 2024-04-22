// Object constructor.
var Movie = function (mTitle, mRating, mRelease){
    this.title = mTitle;
    this.rating = mRating;
    this.release = mRelease;
}
// An array when users enter data from constructor.  
let MoviesArray = []

document.addEventListener("DOMContentLoaded", function(event) {
// Call to an HTML element that displays list.
document.getElementById("show").addEventListener("click", function() {
    let message = "<ul>"
    for(i=0; i < MoviesArray.length; i++) {
         message += "<li>" + "Movie: " + MoviesArray[i].title + ", " + "Ratings: " + MoviesArray[i].rating + ", " + "Year: " + MoviesArray[i].release + "</li>"
    }
    message += "</ul>"
    // Change it so it shows array constructor.
    document.getElementById("display").innerHTML = message;
    // Clears the array and removes previous <li> preventing duplicates. 
    MoviesArray = []
    })
})

function addFunction() {
mTitle = document.getElementById("mtitle").value;
mRating = document.getElementById("mrating").value;
mRelease = document.getElementById("mrelease").value;

// Check if validation are met if not then creates an alert.
var ErrorMessage = "";
if (mTitle==="null" || mTitle==="" || mRating==="null" || mRating==="" || mRelease==="null" || mRelease==="") {
    ErrorMessage += "WARNING! You didn't provide enough information on all fields! So no data would be saved for the movie";
    alert(ErrorMessage)
    console.log("Invalid.")
    } else {
            console.log("Everything Valid!")
            // Closes the show movie feature, until user opens it.
            document.getElementById("display").innerHTML = '';
            // Call constructor and pass in values then push from array.
            MoviesArray.push(new Movie(mTitle, mRating, mRelease))
             console.log(MoviesArray)
            // Reset field once done.
            document.getElementById("mtitle").value='';
            document.getElementById("mrating").value='';
            document.getElementById("mrelease").value='';
    };
}
