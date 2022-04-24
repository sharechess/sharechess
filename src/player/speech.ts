const words: { [key: string]: string } = {
  x: " takes ",
  "+": " check!",
  "#": " mate!",
  "=": " promotes to a ",
  P: "pawn ",
  R: "rook ",
  B: "bishop ",
  N: "knight ",
  Q: "queen ",
  K: "king ",
  "O-O": "short castle",
  "O-O-O": "long castle",
};

const config = {
  volume: 50,
  rate: 1,
  lang: "en-US",
};

const sanToText = (move: string) => {
  if (move === "O-O" || move === "O-O-O") {
    move = words[move];
  } else {
    // Handles special cases like R2a6 ore Nbd2
    const special = move.match(/[a-h1-8][a-h][1-8]/);

    if (special) {
      move = move.replace(
        special[0],
        `${special[0][0]} ${special[0][1]}${special[0][2]}`
      );
    }

    move = move
      .split("")
      .map((x) => words[x] ?? x)
      .join("")
      .replace(/\s{2,}/g, " ");
  }

  return move;
};

class Speech {
  private voice: SpeechSynthesisVoice | undefined;
  constructor() {
    if (!window.speechSynthesis) {
      this.voice = undefined;
    } else {
      const voices = speechSynthesis.getVoices();
      this.voice = voices.find((voice) => voice.lang === config.lang);
    }
  }

  say(text: string) {
    const info = new SpeechSynthesisUtterance(text);
    info.volume = config.volume / 100;
    info.lang = config.lang;
    if (this.voice) {
      info.voice = this.voice;
    }
    info.rate = 1 + config.rate / 10;
    speechSynthesis.speak(info);
  }
}

export { sanToText };
export default Speech;
