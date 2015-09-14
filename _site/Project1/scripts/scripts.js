//https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=571CCF8D3B029DEBB4EF89B95B08D6DF&account_id=35634853&matches_requested=1
//thats the link I would use to retrieve my last game of Dota 2 played.
// need to allow access through dota 2 client as well.





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


// This is the steam call for 1 game. I need to allow access from my dota 2 client at home.


var steamAjaxCall = function () {
var url = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=571CCF8D3B029DEBB4EF89B95B08D6DF&account_id=35634853&matches_requested=1';

$.getJSON("http://query.yahooapis.com/v1/public/yql",
{
q: "select * from json where url=\"" + url + "\"",
format: "json"
},
function(data){
   console.log(data.query.results.result);
})
}
steamAjaxCall ();




// // parser for steam time.
// function timeConverter(UNIX_timestamp){
//   var a = new Date(UNIX_timestamp * 1000);
//   var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//   var year = a.getFullYear();
//   var month = months[a.getMonth()];
//   var date = a.getDate();
//   var hour = a.getHours();
//   var min = a.getMinutes();
//   var sec = a.getSeconds();
//   var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
//   return time;
// }
