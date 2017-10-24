$(document).ready(function() {
  $("#animalSelect").submit(function (event) {
    event.preventDefault();
    var animal = parseInt($("select#animalPicker").val());
    if (animal === 1) {
    $(".capybara").show();
    $(".spidersnake").hide();
    $(".sandcat").hide();
    } else if (animal === 2) {
    $(".sandcat").show();
    $(".capybara").hide();
    $(".spidersnake").hide();
    } else {
    $(".spidersnake").show();
    $(".capybara").hide();
    $(".sandcat").hide();
    }
  });
});
