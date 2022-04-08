let theRow = 0;

$("#theTable").on("click", ".deleteColumn", function(evt) {
  $(this).parent().remove();
});

$("#aMovie").on("click", function(e) {
  e.preventDefault();
  let theMovieTitle = $("#movieTitle").val();
  let theMovieRating = $("#movieRating").val()
  if (theMovieTitle.length >= 2 && theMovieRating != '' && theMovieRating >= 0 && theMovieRating <= 10) {
    if ($("#theTable td").length === 0) {
      $("#theTable").removeClass("tableViewOff").addClass("tableViewOn");
    }
    theRow++;
    $("#theTable").append("<tr><td class=tdTitle>" + theMovieTitle + "</td><td class=tdRating>" + theMovieRating + "</td><td id=" + `R${theRow}` + " class=deleteColumn>" + "X" + "</td></tr>");
    $("#movieTitle").val('');
    $("#movieRating").val('');
  } else {
    if (theMovieRating <= 0 || theMovieRating >= 10) {
      $("#movieRating").val('');
    };
  }
});
