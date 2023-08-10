document.addEventListener("keydown", (event) => {
  if (event.key === "f12" || event.keyCode === 123) {
    event.preventDefault();
    $.growl.error({
      title: "嘿！别瞎按！",
      message: "坏孩子!",
      duration: 5000,
    });
  }
});
