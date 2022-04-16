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
  rewind: new Howl({
    src: ["/sfx/rewind.wav"],
    volume: 0.2,
  }),
  snort: new Howl({
    src: ["/sfx/snort.wav"],
    volume: 0.5,
  }),
  neigh: new Howl({
    src: ["/sfx/neigh.wav"],
    volume: 0.5,
  }),
  fanfare: new Howl({
    src: ["/sfx/fanfare.wav"],
    volume: 0.5,
  }),
  brickMove: new Howl({
    src: ["/sfx/brick-move.wav"],
    volume: 0.3,
  }),
  brickTake: new Howl({
    src: ["/sfx/brick-take.wav"],
    volume: 0.2,
  }),
  brickCastle: new Howl({
    src: ["/sfx/brick-castle.wav"],
    volume: 0.3,
  }),
  coneMove: new Howl({
    src: ["/sfx/cone-move.wav"],
    volume: 0.3,
  }),
  coneTake: new Howl({
    src: ["/sfx/cone-take.wav"],
    volume: 0.3,
  }),
};

export default sfx;
