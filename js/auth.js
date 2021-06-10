$(document).ready(function(){  
  $("#cpwd").focus(function(){
    console.log("hey");
    $("#cpwd").parent().addClass("has-success has-feedback");
  });
});

function signup(){
  document.getElementById('signform').hidden = false;
  document.getElementById('title').innerHTML = "Register - Reach Out";
}
