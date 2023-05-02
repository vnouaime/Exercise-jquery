$("#submit").on("click", function(e) {
    e.preventDefault(); // prevents page from refreshing
    
    let movieEntry = $("#movie-entry"); // selects movie entry input from user
    let ratingEntry = $("#rating-entry"); // selects rating entry input from user
    let userInputs = [movieEntry, ratingEntry]; // array that holds userInputs

    let row = $("<tr>"); // creates new table row element for movie and rating entry
    let movieData = $("<td>"); // movie title data
    let ratingData = $("<td>"); // rating title data
    const delBtn = $("<button>"); // creates delete button for entry inputted

    row.addClass("css-styling");

    const entry = [movieData, ratingData, delBtn]; // array that holds newly created td and button elements
    
    $("#all-entries").append(row); // has table append the row that was just created in the DOM
    row.append(entry);
    
    movieData.text(movieEntry.val()); // text of td element changes to user input
    ratingData.text(ratingEntry.val());
    delBtn.addClass("del-btn");
    delBtn.text("Delete");

    userInputs.map(function(i) { // runs through userInputs array and empties the content that the user has just submitted 
        return i.val(""); 
    })
    
    delBtn.on("click", function(evt) { // function to delete most recent data entry when delete button is clicked
        e.preventDefault();
        
        $(this).parent().remove();
    })
})  