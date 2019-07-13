// @ts-nocheck

// use the tone.js libreray  * https://cdnjs.com/libraries/tone *
function sequencer() {
  const kick = new Tone.Player("./drum/kick-clap-808.waw").toMaster();
  const snare = new Tone.Player("./drum/snare-cowbell-808.waw").toMaster();

  const kickInputs = document.getElementsByClassName('.kick')
  console.log(kickInputs);

}
sequencer();