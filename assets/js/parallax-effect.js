const scene = document.getElementById("paralax-scene")
const ParallaxBg = {
  init: function() {
    new Parallax(scene, {
      relativeInput: true
    })
  }
}
