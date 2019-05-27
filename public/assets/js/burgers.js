$("#addburger").on("click", function(){
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burger-name").val().trim(),
        devoured: 0
    };

    console.log(newBurger);

    $.post("/api/burgers", newBurger)

    $("#burger-name").val("");
    location.reload()
})

$(".change-eat").on("click", function(){
    var id = $(this).data("id");

    var eatState = {
        devoured: 1
    }
    
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
    );
})

