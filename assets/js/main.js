const startBtn = document.querySelector("#btnStart")
const AMW001 = {
  isPlay: false,
  currentDuration: 0,
  animation: null,
  init: function() {
    // Init Animasi Timeline
    AMW001.animation = anime.timeline({
      autoplay: false,
      update: function(anim) {
        AMW001.currentDuration = anim.progress
      }
    })
    AMW001.animation.add({
      targets: "#btnStart #btnStartIcon",
      scale: 0.5,
      opacity: 0,
      easing: "easeInOutBack"
    })

    startBtn.addEventListener("click", function() {
      AMW001.isPlay ? AMW001.pause() : AMW001.start()
    })

    document.addEventListener("keydown", function(e) {
      if (e.key === "z" || e.key === "Z") AMW001.start()
      if (e.key === "x" || e.key === "X") AMW001.pause()
      if (e.key === "c" || e.key === "C") AMW001.stop()
      if (e.key === "v" || e.key === "V") AMW001.restart()
    })
  },
  start: function() {
    AMW001.isPlay = true
    AMW001.animation.play()
  },
  pause: function() {
    AMW001.animation.pause()
    AMW001.isPlay = false
  },
  restart: function() {
    // Mengulang dari awal
    if (AMW001.currentDuration !== 0) {
      AMW001.animation.restart()
    }
  },
  stop: function() {
    // Stop Animasi dan mengulang dari awal
    if (AMW001.currentDuration !== 0) {
      AMW001.animation.pause()
      AMW001.animation.seek(0)
    }
  }
}
