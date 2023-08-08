$(document).ready(function () {
    var date = new Date();
    $("#msg_text").text("欢迎！");
    $(".msg").fadeIn(3000);
    $(".msg").fadeOut(6000);
    $('#year').text(date.getFullYear());

    $("#qq").click(function(){
        swal({'title':'提示','text':'QQ交流群的群号：135452025','icon':'success'});
    });
});