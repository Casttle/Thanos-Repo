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
});