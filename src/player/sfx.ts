import { Howl } from "howler";

const sfx = {
  move: new Howl({
    src: ["/sfx/move.wav"],
    volume: 0.3,
  }),
  take: new Howl({
    src: ["/sfx/take.wav"],
    volume: 0.9,
  }),
  swap: new Howl({
    src: ["/sfx/swap.wav"],
    volume: 0.6,
  }),
  snap: new Howl({
    src: ["/sfx/snap.wav"],
    volume: 0.6,
  }),
};

export default sfx;
