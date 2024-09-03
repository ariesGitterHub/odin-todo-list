import btnAudioFile from "../assets/sound-click.mp3";

const btnAudio = new Audio(btnAudioFile);
btnAudio.preload = "auto";

export function playClickSound() {
  btnAudio.currentTime = 0; // Reset the audio to the beginning
  btnAudio.play();
}