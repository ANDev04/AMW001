const startBtn = document.querySelector("#btnStart");
const AMW001 = {
  checkCondition : false,
  init: function() {
    startBtn.addEventListener("click", function() {
      if (AMW001.checkCondition == false) {
        AMW001.start();
      } else {
        AMW001.pause();
      }
    });
  },
  start: function() {
    AMW001.checkCondition = true;
    let animation = anime({
      targets: "#btnStart #btnStartIcon",
      scale: 0.5,
      opacity: 0,
      easing: "easeInOutBack"
    });
  },
  pause: function() {
    AMW001.checkCondition = false;
    console.log("Hello Ini Pause");
  },
  stop: function() {
    console.log("Hello Ini Stop");
  }
};
