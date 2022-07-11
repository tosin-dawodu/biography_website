const audioPlay = document.getElementById("audio");
function togglePlay() {
  return audioPlay.paused ? audioPlay.play() : audioPlay.pause();
}
document.addEventListener("click", togglePlay);
