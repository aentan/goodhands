//= require_tree .

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {

  // Dynamo
  $('.dnm').each(function(index) {
    setTimeout(function() {
      $('.dnm').eq(index).dynamo();
    }, randInt(3000, 6000))
  });
  
  // Mailchimp
  $('#mc-embedded-subscribe-form').ajaxChimp({
    callback: callbackFunction
  });
  
  function callbackFunction (resp) {
    console.log(resp);
    if (resp.result === "error") {
      var msg = resp.msg.split(' - ')[1];
    } else {
      var msg = resp.msg;
    }
    $('#result').removeClass().addClass(resp.result).html(msg);
  }
  
});