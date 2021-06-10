  $(document).ready(function(){
    $('#payment').hide();
    $('#sub').attr('disabled', true);

    $('#continue').click(function(){
      console.log("hi");
      $('#main-form').hide();
      $('#posters').hide();
      $('#payment').show();
      $('#sub').attr('disabled', false);

      $('#pay').val($('#price').html());
    });

    var price = 0;
    $('.event-check').change(function(){
      var dprice = parseInt($(this).attr('data-price'));
      price = $(this).is(":checked") ? price+dprice : price-dprice ;

      console.log($('event-check').not(':checked'));
      if($('.event-check').not(':checked').length == 0 && !($("#team").val() === 'g')){
        $('#allevent').prop("checked", true);
        specialdiscount();
      } else {
        $('#price').html(price);
        $('#allevent').prop("checked", false);
      }
    });

    $('#team').change(function(){
      $('#price').html('0');
      price=0;
      $('.event-check').prop("checked", false);
      if($(this).val() === 'g'){
        $('.all').hide();
        for(var i=0;i<3;i++){
          var box = $('#event'+i);
          box.attr("data-price", box.attr("data-gprice"));
        }
      } else {
        location.reload();
      }
    });

    $('#allevent').change(function(){
      if($(this).prop("checked")){
        $('.event-check').prop("checked", true);
        specialdiscount();
      } else {
        $('.event-check').prop("checked", false);
        $('#price').html(0);
        price = 0;
      }
    });
  });

function specialdiscount(){
  price = 1427;
  $('#price').html('1500');
}

function validate(){
  return;
}
