$("path, circle").hover(function(e) {
    $("#info-box").css("display", "block");
    $("#info-box").html($(this).data("info"));
  });
  
  $("path, circle").mouseleave(function(e) {
    $("#info-box").css("display", "none");
  });
  
  $(document)
    .mousemove(function(e) {
      $("#info-box").css("top", e.pageY - $("#info-box").height() - 35);
      $("#info-box").css("left", e.pageX - $("#info-box").width() / 2);
    })
    .mouseover();


    $(document).ready(function() {
      $("area#south-button").click(function () {
        $("#south-map").fadeIn(1000);
       $("#map").hide();
      });

      $("area#east-button").click(function () {
       $("#east-map").fadeIn(1000);
       $("#map").hide();
      });

      $("area#west-button").click(function () {
        $("#west-map").fadeIn(1000);
        $("#map").hide();
       });

       $("#south-map-east-button p").click(function () {
        $("#east-map").fadeIn(1000);
        $("#south-map").hide();
       });


     });