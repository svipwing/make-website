$(document).ready(function(){
var date = new Date();
$("#msg_text").text("欢迎！");
$(".msg").fadeIn(3000);
$(".msg").fadeOut(6000);
$('#year').text(date.getFullYear());
if($.cookie('grey_mode_bool')==undefined){
   alert('没有设置cookie');
   $.cookie('grey_mode_bool', 'no', {expires: 365});
}else if($.cookie('grey_mode_bool')=='yes'){
  $("html").toggleClass("grey_mode"); 
}
$("#rain").click(function(){
  $("html").toggleClass("grey_mode");
  if($.cookie('grey_mode_bool')=='no'){
    $.cookie('grey_mode_bool','yes');
  }else{
    $.cookie('grey_mode_bool','no');
  }
});
$("#login").click(function(){
  $("#panel").slideDown();
  $("#panel").css('display','flex');
});
$("#close").click(function(){
  $("#panel").slideUp();
});
$("#re").click(function(){
   if($("#re").text()=="/注册"){
  $("#re").text('/登录');
  $("#lo").text('注册');
  $("#login_button").text('注册');
  $("#yanzheng").show();
  }else{
  $("#re").text('/注册');
  $("#lo").text('登录');
  $("#login_button").text('登录');
  $("#yanzheng").hide();
  }
});
$("#send").click(function(){
  if($("#email").val()!=""){
    //alert($("#email").val());
    $.get("api/a.html?path=function&page=code&to="+$("#email").val(),function(data,status){
    var obj = eval ("(" + data + ")");
    if(Number(obj.code)==200 && status=="success"){
      $("#send").text("已发送");
      //$("#msg_text").text("发送成功！若没有收到请检查垃圾箱");
      $.growl.notice({
          title: "发送成功",
        message: "若没有收到，请检查垃圾箱"
      });
      $(".msg").fadeIn(3000);
      $(".msg").fadeOut(6000);
      }else{
      swal("Oops！","发送失败！等一会儿再试吧","error");
      $(".msg").fadeIn(3000);
      $(".msg").fadeOut(6000);
      }
  });
  }else{
  alert("请先输入邮箱地址");
  }
});
});