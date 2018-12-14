const startBtn = document.querySelector("#btnStart")
const AMW001 = {
  isPlay: false,
  animation: null,
  init: function() {
    // Init Animasi Timeline
    AMW001.animation = anime.timeline({ autoplay: false })
    AMW001.animation.add({
      targets: "#btnStart #btnStartIcon",
      scale: 0.5,
      opacity: 0,
      easing: "easeInOutBack"
    })

    startBtn.addEventListener("click", function() {
      AMW001.isPlay ? AMW001.pause() : AMW001.start()
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
  stop: function() {
    // Stop Animasi dan mengulang dari awal
  }
}
