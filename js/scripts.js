$(document).ready(function() {
  //const allOfYourFavoriteThings = [];
  $("form#favorite-things").submit(function(event) {
    event.preventDefault();

    const favorite1 = $("#favorite1").val();
    const favorite2 = $("#favorite2").val();
    const allOfYourFavoriteThings = [];
    const secondFavoriteThings = [];
    allOfYourFavoriteThings.push(favorite1, favorite2);
    secondFavoriteThings.push(allOfYourFavoriteThings[1]);

    function splitUpArray(allOfYourFavoriteThings) {
      $("ul").append("<li>" + allOfYourFavoriteThings[0]);
      $("ul").append("<li>" + allOfYourFavoriteThings[1]);
      return 0;
    }
    splitUpArray(allOfYourFavoriteThings);

    //const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
    //arrayOfThingsILike.forEach(function(thing) {
    //$("#likable-things").append(" " + thing + "!");
    //});

  })
})