$(document).ready(function () {

  // hide all pages except home
  $(".pages").hide();
  $("#index").show();

  $("#about").click(function(){
    $(".pages").hide();
    $("#index").hide();
    $("#about_scroll").fadeIn();
  });

  $("#work").click(function(){
    $(".pages").hide();
    $("#index").hide();
    $("#work_scroll").fadeIn();
  });

  $("#contact").click(function(){
    $(".pages").hide();
    $("#index").hide();
    $("#contact_scroll").fadeIn();
  });

  $(".back").click(function(){
    $(".pages").hide();
    $("#index").fadeIn();
  });

});
