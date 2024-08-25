$(document).ready(function () {
    $("#qq").click(function () {
        swal({'title': '加入QQ交流群', 'text': '群号：135452025'});
    });

    // if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    //     $("#pc").hide();
    //     $("#gitee_repo_pc").hide();
    //     $('.double').removeClass("double");

    //     $.growl.notice({
    //         title: "提示",
    //         message:
    //             "建议使用电脑端打开，移动端建议切换为横屏以获得更好的体验",
    //         duration: 10000,
    //     });
    // }
});