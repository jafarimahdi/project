
// use the tone.js library  * https://cdnjs.com/libraries/tone *
console.log('hello')

function sequencer() {
  let kick = new Tone.Player("./drum/hihat-808.wav").toMaster();
  let snare = new Tone.Player("./drum/tom-analog.waw").toMaster();
  let index = 0;

  Tone.Transport.scheduleRepeat(repeat, "8n");
  Tone.Transport.start();

  function repeat() {
    let step = index % 8;
    let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);

    let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);


    if (kickInputs.checked) {
      kick.start();
    }
    if (snareInputs.checked) {
      snare.start();
    }
    index++;
  }
}
sequencer();
