let result = {};

fetch("https://coco.codemao.cn/http-widget-proxy/https@SEP@gitee.com/api/v5/repos/jsy-1/make-website/commits?page=1&per_page=5")
    .then(response => response.json())
    .then(data => {
        for (let item of data) {
            let message = item.commit.message;
            let author = item.commit.author.name;
            let date = item.commit.author.date;
            result[message] = {
                author: author,
                date: date
            };
        }

        let text = document.getElementById("history");
        for (let i in result) {
            let s = i.replace("\n", "").replace("[update]", "");
            if (s.includes("Signed-off-by:")) {
                s = s.split("Signed-off-by:")[0];
            }
            text.innerHTML += result[i].date.substring(0, 10) + " " + s + "<br><br>";
        }
    })
    .catch(error => console.log(error));

fetch("https://coco.codemao.cn/http-widget-proxy/https@SEP@gitee.com/api/v5/repos/jsy-1/make-website/tags?sort=updated&direction=asc&page=1&per_page=100")
    .then(response => response.json())
    .then(data => {
        let text = document.getElementById("version");
        text.innerHTML = data.reverse()[0]["name"]
    })
    .catch(error => console.log(error));