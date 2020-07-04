$(function () {
  $(".change-devour").on("click", function (event) {
    const id = $(this).data("id");
    const newDevoured = $(this).data("newdevour");
    const newDevouredState = {
      isDevoured: newDevoured,
    };
    console.log(newDevouredState, newDevoured);

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("Devoured!");
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      name: $("#ca").val().trim(),
      isDevoured: 0,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Added Burger!");
      location.reload();
    });
  });
});
