$(document).ready(function () {
    var date = new Date();
    $("#msg_text").text("欢迎！");
    $(".msg").fadeIn(3000);
    $(".msg").fadeOut(6000);
    $('#year').text(date.getFullYear());

    var month = date.getMonth() + 1;
    var day = date.getDate();
          
    if(month==10 && day==20){
        swal({
          "title":"节日快乐！", 
          "text":"1024程序员节快乐！", 
          "icon":"success", 
          "button":false,
          timer: 3000
        });
     }

    $("#qq").click(function(){
        swal({'title':'提示','text':'QQ交流群的群号：135452025','icon':'success'});
    });

    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        $("#nav-pc").hide();
        $("#helpme").hide();
        $("#aboutme").hide();
        $("#startuse").hide();
        $('.da').removeClass("da");

        $.growl.notice({
            title: "提示",
            message:
              "建议使用电脑端打开，移动端建议切换为横屏以获得更好的体验",
            duration: 10000,
        });
    }
});