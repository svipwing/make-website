$(document).ready(function () {
    var elements = document.getElementsByTagName("*");
    var isMusicPlaying = false;
    var bgmusic = "";

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function (event) {
            if (!isMusicPlaying) {
                event.stopPropagation();

                bgmusic = new Audio('static/bg.mp3');
                bgmusic.loop = true;
                bgmusic.volume = 0.25;
                bgmusic.play();

                isMusicPlaying = true;
            }
        });
    }

    var bgmusic_isplay = true;
    $("#banquan-time").click(function () {
        if(bgmusic_isplay){
            bgmusic.pause();
            bgmusic_isplay = false;
        }else{
            bgmusic.play();
            bgmusic_isplay = true;
        }
    });

    var date = new Date();
    $("#msg_text").text("欢迎！Welcome！");
    $(".msg").fadeIn(500);
    $(".msg").fadeOut(1000);
    $('#year').text(date.getFullYear());

    var month = date.getMonth() + 1;
    var day = date.getDate();

    if (month == 10 && day == 24) {
        swal({
            "title": "节日快乐！",
            "text": "1024程序员节快乐！",
            "icon": "success",
            "button": false,
            "timer": 1500
        });
    }

    $("#qq").click(function () {
        swal({'title': '提示', 'text': 'QQ交流群的群号：135452025', 'icon': 'success'});
    });

    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        $("#pc").hide();
        $("#gitee_repo_pc").hide();
        $('.double').removeClass("double");

        $.growl.notice({
            title: "提示",
            message:
                "建议使用电脑端打开，移动端建议切换为横屏以获得更好的体验",
            duration: 10000,
        });
    }
});