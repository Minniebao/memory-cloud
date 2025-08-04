document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bg-music");
  const playButton = document.querySelector(".audio-button"); // ← 改为 class，与你 HTML 对应

  if (playButton && audio) {
    playButton.addEventListener("click", function () {
      if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause Music";
      } else {
        audio.pause();
        playButton.textContent = "Play Music";
      }
    });
  }
});
// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

function handleScrollFade() {
  faders.forEach(fade => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      fade.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollFade);
window.addEventListener('load', handleScrollFade);
