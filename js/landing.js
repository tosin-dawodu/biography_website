alert("Double-tap on your screen to play or pause background music.");

const audioPlay = document.getElementById("audio");
function togglePlay() {
  return audioPlay.paused ? audioPlay.play() : audioPlay.pause();
}
document.addEventListener("dblclick", togglePlay);
