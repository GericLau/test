$(function() {
  // 回程控制
  $('form#return').hide();
  
  $('input#optionRadios1').click(function() {
    $('form#return').hide();
  });
  
  $('input#optionRadios2').click(function() {
    $('form#return').show();
  });
  //设置form的margin都为0
  $('form').css('margin','0 0 0 0');
  /*当点击单选框时，可以将其ID保存下来
   *然后修改相应的文字
   */
  //var radio = $('.form-inline input');
  //radio.click(function() {
  //});
  $('input#Radios1').click(function() {
    $('div#zhengjian').show();
    $('div#pearl').hide();
    $('div#ticket').hide();
  });
  $('input#Radios2').click(function() {
    $('div#zhengjian').hide();
    $('div#pearl').show();
    $('div#ticket').hide();
  });
  $('input#Radios3').click(function() {
    $('div#zhengjian').hide();
    $('div#pearl').hide();
    $('div#ticket').show();
  });
});
