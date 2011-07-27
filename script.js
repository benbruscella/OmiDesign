
$(document).ready(function() {
  
  var location = window.location.hostname;
  
  $(".message-button").click( function(){
    $("#contact").hide();
    $("#form").show().slideDown();
  });

  var nameString = "Name";
  $("#name").focus(function(srcc)
  {
      if ($(this).val() == nameString) 
        $(this).val("");
  });

  $("#name").blur(function()
  {
      if ($(this).val() == "")
          $(this).val(nameString);
  });   
  $("#name").blur();

  var emailString = "Email";
  $("#email").focus(function(srcc)
  {
      if ($(this).val() == emailString) 
        $(this).val("");
  });

  $("#email").blur(function()
  {
      if ($(this).val() == "")
          $(this).val(emailString);
  });   
  $("#email").blur();

  var commentsString = "Comments";
  $("#comments").focus(function(srcc)
  {
      if ($(this).val() == commentsString) 
        $(this).val("");
  });

  $("#comments").blur(function()
  {
      if ($(this).val() == "")
          $(this).val(commentsString);
  });   
  $("#comments").blur();


  $('#form').submit(function() {

    //Get the data from all the fields
    var name = $('input[name=name]');
    var email = $('input[name=email]');
    var comments = $('textarea[name=comments]');

    //Simple validation to make sure user entered something
    //If error found, add hightlight class to the text field
    if (name.val()=='' || name.val()=='Name') {
        name.addClass('highlight');
        return false;
    } else name.removeClass('highlight');
     
    if (email.val()=='' || email.val()=='Email') {
        email.addClass('highlight');
        return false;
    } else email.removeClass('highlight');
     
    if (comments.val()=='' || comments.val()=='Comments') {
        comments.addClass('highlight');
        return false;
    } else comments.removeClass('highlight');
     
    //organize the data properly
    var data = 'name=' + name.val() + '&email=' + email.val() + '&comments='  + encodeURIComponent(comments.val());
     
    //disabled all the text fields
    $('.text').attr('disabled','true');
     
    //show the loading sign
    $('.loading').show();
     
    //start the ajax
    $.ajax({
        //this is the php file that processes the data and send mail
        url: "email.php", 
         
        //GET method is used
        type: "POST",

        //pass the data         
        data: data,     
         
        //Do not cache the page
        cache: false,
         
        //success
        success: function (html) {              
            //if process.php returned 1/true (send mail success)
            if (html==1) {                  

              //hide the form
              $('#form').hide();                 

              //show the success message
              $('#thanks').fadeIn('slow');
                                    
            //if process.php returned 0/false (send mail failed)
            } else alert('Sorry, please try again later.');               
        }       
    });
     
    //cancel the submit button default behaviours
    return false;
  });

});