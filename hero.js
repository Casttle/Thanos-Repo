$(document).ready(function () {
    var laugh = document.getElementById("laugh");
    var cheer = document.getElementById("cheer");
    var thanos = document.getElementById("thanos");
    var song = document.getElementById("song");

$(".snap-button").on("click", function() {
    $(".crowd1").fadeOut(5000);
    laugh.play();
});

$(".spare").on("click", function() {
    $(".crowd1").fadeIn();
    cheer.play();

});

$(".grow-button").on("click", function() {
   song.play();
    $(thanos).animate({ height: "650px",width: "500px",top:"-150px" },5000);

  });

  $(".normal-button").on("click", function() {
    $(thanos).animate({ height: "416px", width: "305px", top: "50px"});
  });

   // Keyboard move controls
   $(document).keyup(function(e) {
    switch (e.which) {

    // Move Buttons (Keyboard Down)
    case 40:
      $(thanos).animate({ top: "+=200px" }, "normal");
      break;

      // Move Buttons (Keyboard Right)
    case 39:
      $(thanos).animate({ left: "+=200px" }, "normal");
      break;

      // Move Buttons (Keyboard Up)
    case 38:
      $(thanos).animate({ top: "-=200px" }, "normal");
      break;

      // Move Buttons (Keyboard Left)
    case 37:
      $(thanos).animate({ left: "-=200px" }, "normal");
      break;

    default:
      break;
    }
  });
});