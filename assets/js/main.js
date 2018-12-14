const startBtn = document.querySelector("#btnStart")
const AMW001 = {
  init: function() {
    startBtn.addEventListener("click", function() {
      AMW001.start()
    })
  },
  start: function() {
    console.log("Hello Ini Start")
  },
  pause: function() {
    console.log("Hello Ini Pause")
  },
  stop: function() {
    console.log("Hello Ini Stop")
  }
}
