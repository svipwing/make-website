
var mode = 0;
var y = 0;

var jie = 0;

var target_x = 0;
var target_y = 0;

function show(x,ele) {
    $(ele).css("outline","rgb(22, 93, 255) solid 1px");
    jie = $(ele);

    if (x == 1) {
        mode = {
            "type": "h1_xy",
            "x": -1199,
            "y": -837,
        };
    }

    if (x == 2) {
        mode = {
            "type": "h2_xy",
            "x": -1199,
            "y": -837,
        };
    }

    if (x == 3) {
        mode = {
            "type": "h3_xy",
            "x": -1199,
            "y": -837,
        };
    }

    y=x;
}

$(function () {

    const div = document.getElementById("look_pos");

    document.body.addEventListener("mousemove", function (event) {

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const divRect = div.getBoundingClientRect();
        const divWidth = divRect.width;
        const divHeight = divRect.height;

        const relativeX = mouseX - divRect.left;
        const relativeY = mouseY - divRect.top;

        const percentX = (relativeX / divWidth) * 100;
        const percentY = (relativeY / divHeight) * 100;

        target_x = percentX.toFixed(2);
        target_y = percentY.toFixed(2);
    });

    div.addEventListener("click", function (event) {
        if (y != 0) {
            linshi = Blockly.serialization.workspaces.save(workspace);
            ls = mode;
            ls["fields"] = {
                "text": "text",
                "id": "id",
                "x": target_x.toString(),
                "y": target_y.toString()
            };
            linshi.blocks.blocks.push(ls);

            Blockly.serialization.workspaces.load(linshi, workspace);
            workspace.scrollCenter();

            jie.css("outline","none");
            y=0;
        }
    });
});