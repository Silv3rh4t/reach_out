var url = window.location.href;
var roomid = url.substring(url.lastIndexOf('/')+1);

$(function () {
  var socket = io();
  $('form').submit(function(e) {
    e.preventDefault(); // prevents page reloading
    var msg = $('#m').val();
    socket.emit('chat message', {msg:msg, roomid:roomid});
    $('#msgs').append(outgoing(msg));
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(data){
    console.log(data);
    if(data.roomid === roomid){
      $('#msgs').append(incoming(data.msg));
    }
  });
});
function outgoing(msg){
  return '<div class="outgoing_msg"><div class="sent_msg"><p>'+msg+'</p></div></div>'
}
function incoming(msg){
  return '<div class="incoming_msg"><div class="received_msg"><div class="received_withd_msg"><p>'+msg+'</p></div></div></div>';
}