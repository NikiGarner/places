// business logic
function Destination(location, season, landmarks) {
  this.location = location;
  this.season = season;
  this.landmarks = landmarks;
}

Destination.prototype.information = function () {
  return this.location + " " + this.season + " " + this.landmarks;
};

// user interface logic
$(document).ready(function() {
  $("form#form-group").submit(function(event){
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedSeason = $("input#new-season").val();
    var inputtedLandmarks = $("input#new-landmarks").val();

    var newDestination = new Destination(inputtedLocation, inputtedSeason, inputtedLandmarks);

    $("ul#result").append("<li><span class='destination'>" + newDestination.information() + "</span></li>");

    $("#result").last().click(function() {
      $("#show-result").show();
      $("#show-result h2").text(newDestination.information);
      $(".location-name").text(newDestination.location);
      $(".season").text(newDestination.season);
      $(".landmarks").text(newDestination.landmarks);
    });



  });
});
