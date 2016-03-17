// business logic
function Destination(location, season, landmarks) {
  this.location = location;
  this.season = season;
  this.landmarks = landmarks;
}

Destination.prototype.information = function () {
  return this.location + " " + this.season + "" + this.landmarks;
};

// user interface logic
$(document).ready(function() {
  $("form#form-group").submit(funciton(event){
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedSeason = $("input#new-season").val();
    var inputtedLandmarks = $("input#new-landmarks").val();

    var newDestination = new Destination(inputtedLocation, inputtedSeason, inputtedLandmarks);

    $("ul")
  }
});
