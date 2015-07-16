$(document).ready(function() {

  console.log("All resources are loaded");

  // hide status messages
  $('.loading').hide();
  $('.success').hide();
  $('.error').hide();

  // contact submit event handler
  $('#form_send').on('click', function() {
    var formdata = app.createFormObject();
    console.log(formdata);
    console.log('Clicked form submit...');
    app.sendEmail(formdata);

  });

});



var app = app || {};

app.createFormObject = function () {

  var retJson = {};

  retJson.userName = $('#user_name').val ();
  retJson.userCompany = $('#user_company').val ();
  retJson.userEmail = $('#user_email').val ();
  retJson.userSubject = $('#user_subject').val ();
  retJson.request = $('#user_request').val ();

  return retJson;
};

app.sendEmail = function (emailData) {

    $('.loading').slideDown();
    $('.success').hide ();
    $('.error').hide ();

    var ajaxData = {
      type: 'post',
      url: 'http://imperialholonet.herokuapp.com/api/mail',
      data: emailData,
      success: function (data) {
        console.log(data);
        $('.loading').slideUp ();
        console.log("yup");
        $('.success').show;
      },
      error: function(err) {
        console.log(err);
        $('.loading').slideUp ();
        console.log("Nope");
        $('.error').show ();
      }
    }
  };
