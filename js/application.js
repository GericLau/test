$(function(){
    var $window = $(window) 

    // popover demo
    $("a[rel=popover]")
    .popover()
    .click(function(e) {
    e.preventDefault()
    }) 
    // tooltip demo
    $("a[rel=tooltip]")
    .tooltip();
    
    /*var radios = $(".rad input");
    radios.click(function() {
      var value = $(this).val();
      $(".cr").get(0).innerHTML = value;
      $("#priceCount_id").get(0).innerHTML = value;
    })*/

    // set the money
    var radios = $(".rad input");
    radios.click(function() {
      var value = $(this).val();
      var adultNum = $('#adult').attr("value");
      var childNum = $('#child').attr("value");
      var babyNum = $('#baby').attr("value");
      var adultM = value * adultNum;
      var childM = value * childNum * 0.5;
      var babyM = value * babyNum * 0.1;
      var tax = 180 * adultNum; 
      var id=$(this);
      
      var flight_id=$("span#flight_id").get(0).innerHTML;
      $("#flight_number").attr("value",flight_id);
      $("#seat").val(id.attr("id"));
      $(".cr").get(0).innerHTML = adultM;
      $(".cr").get(1).innerHTML = childM;
      $(".cr").get(2).innerHTML = babyM;
      $("#priceCount_id").get(0).innerHTML = adultM + childM + babyM+tax;
      $("#total").val(adultM + childM + babyM+tax);
      //$(".cr").get(0).innerHTML = value * number;
      //$(".cr").get(0).innerHTML = value;
      //$("#priceCount_id").get(0).innerHTML = value;
    })

    /* disable */
    var all = $("input#all");
    $("input#disabledInput").attr("disabled",false);
    $("input#disabledInput2").attr("disabled",false);
    all.click(function(){
      $("input#disabledInput").attr("disabled",false);
      $("input#disabledInput2").attr("disabled",false);
      $("input#disabledInput3").attr("disabled",true);
    });
    
    var single =$("input#single");
    single.click(function(){
      $("input#disabledInput2").attr("disabled",true);
      $("input#disabledInput").attr("disabled",true);
      $("input#disabledInput3").attr("disabled",false);
    })

});
function check(radio) {
  document.getElementById("answer").value=radio;
}
