import { Howl } from "howler";

const sfx = {
  move: new Howl({
    src: ["/sfx/move.wav"],
    volume: 0.4,
  }),
  take: new Howl({
    src: ["/sfx/take.wav"],
    volume: 0.5,
  }),
  swap: new Howl({
    src: ["/sfx/swap.wav"],
    volume: 0.5,
  }),
  snap: new Howl({
    src: ["/sfx/snap.wav"],
    volume: 0.5,
  }),
};

export default sfx;
