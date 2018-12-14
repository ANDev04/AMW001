const startBtn = document.querySelector("#btnStart")
const AMW001 = {
  init: function() {
    startBtn.addEventListener("click", function() {
      AMW001.start()
    })
  },
  start: function() {
    let animation = anime({
      targets: "#btnStart #btnStartIcon",
      scale: 0.5,
      opacity: 0,
      easing: "easeInOutBack"
    })
  },
  pause: function() {
    console.log("Hello Ini Pause")
  },
  stop: function() {
    console.log("Hello Ini Stop")
  }
}
