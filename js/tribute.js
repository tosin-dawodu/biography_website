// dynamic text for the extra div
const wordings = document.getElementById("wording");
const sayings = [
  "It pays to be good and it costs you nothing.",
  "Let us continue to give thanks to the Lord.",
  "Always be thankful.",
  "Aburo, gbo gbo é a da.",
];
setInterval(() => {
  const sayingWords = Math.floor(Math.random() * 4);
  if (wording) {
    wording.innerHTML = sayings[sayingWords];
  }
}, 20000);

