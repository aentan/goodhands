//= require_tree .

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randStr(x) {
  var s = "";
  while(s.length<x&&x>0){
    var r = Math.random();
    s+= String.fromCharCode(Math.floor(r*26) + 97);
  }
  return s;
}

$(function() {

  // Dynamo
  $('.dnm').each(function(index) {
    setTimeout(function() {
      $('.dnm').eq(index).dynamo();
    }, randInt(3000, 6000))
  });
  
  // Campaign Monitor
  $('#subscribe-form').submit(function (e) {
    e.preventDefault();
    var numb = $('#fieldtjtujyr').val();
    $.getJSON(
    this.action + "?callback=?",
    $(this).serialize(),
    function (data) {
      $('#result').empty().removeClass();
      
      if (numb == "") {
        $('#result').addClass('error').html('Required');
      } else if (isNaN(numb)) {
        $('#result').addClass('error').html('Not a valid number');
      } else {
        if (data.Status === 400) {
          $('#result').addClass('error').html(data.Message);
        } else { // 200
          $('#result').addClass('success').html("Subscription Confirmed");
        }
      }
      
    });
  });
  
  $('#fieldEmail').val(randStr(8) + '@' + randStr(8) + '.co')
  
});