$(document).ready(function () {
    $("#qq").click(function () {
        swal({'title': '加入QQ交流群', 'text': '群号：135452025'});
    });

    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        $('.intro').addClass("flex-col");
        $('.group').addClass("grid-1");
        $('body').css('padding', '16px 32px');
    }
});