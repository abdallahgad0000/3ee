$(function() {
    $("#showPopup").click(function(e) {
      e.stopPropagation();
      $(".bg").show();
      $(".popup").show();
      $("body,html").animate({scrollTop:0},50)
    });
    $(".bg").click(function() {
      $(".bg").hide();
      $(".popup").hide();
      var video = $("#player").attr("src");
      $("#player").attr("src", "");
      $("#player").attr("src", video);
    //   $("body").css({"overflowY":"auto"})

    });
  });

$(function() {
    $("#showPopup").click(function() {
        $("body").css({"overflowY":"hidden"})
    });
    $(".bg").click(function() {
        $("body").css({"overflowY":"auto"})
  
      });
    // $("body").click(function() {
    //   $(".bg").toggle();
    //   $(".popup").hide();
    //   var video = $("#player").attr("src");
    //   $("#player").attr("src", "");
    //   $("#player").attr("src", video);
    // });
  });
