let theRow = 0;

$("#theTable").on("click", ".deleteColumn", function(evt) {
  $(this).parent().remove();
});

$("#aMovie").on("click", function(e) {
  e.preventDefault();
  let theMovieTitle = $("#movieTitle").val();
  let theMovieRating = $("#movieRating").val()
  if (theMovieTitle.length >= 2 && theMovieRating != '') {
    if ($("#theTable td").length === 0) {
      $("#theTable").removeClass("tableViewOff").addClass("tableViewOn");
    }
    theRow++;
    $("#theTable").append("<tr><td class=tdTitle>" + theMovieTitle + "</td><td class=tdRating>" + theMovieRating + "</td><td id=" + `R${theRow}` + " class=deleteColumn>" + "X" + "</td></tr>");
    $("#movieTitle").val('');
    $("#movieRating").val('');
  }
});
