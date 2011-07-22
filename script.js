
$(document).ready(function() {
  
  var location = window.location.hostname;

  $("#mail").click( function(){
    alert('mail');
  });
  
  $("#message-button").click( function(){
    $("#contact").hide();
    $("#form").show().slideDown();
  });

  $('#form').submit(function() {
    $("#form").hide();
    $("#thanks").show().slideDown();
    return false;
  });

});