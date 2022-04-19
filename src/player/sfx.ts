import { Howl } from "howler";

const sfx = {
  move: new Howl({
    src: ["/sfx/mp3/move.mp3"],
    volume: 0.3,
  }),
  take: new Howl({
    src: ["/sfx/mp3/take.mp3"],
    volume: 0.9,
  }),
  swap: new Howl({
    src: ["/sfx/mp3/swap.mp3"],
    volume: 0.6,
  }),
  snap: new Howl({
    src: ["/sfx/mp3/snap.mp3"],
    volume: 0.6,
  }),
  rewind: new Howl({
    src: ["/sfx/mp3/rewind.mp3"],
    volume: 0.2,
  }),
  snort: new Howl({
    src: ["/sfx/mp3/snort.mp3"],
    volume: 0.5,
  }),
  neigh: new Howl({
    src: ["/sfx/mp3/neigh.mp3"],
    volume: 0.5,
  }),
  fanfare: new Howl({
    src: ["/sfx/mp3/fanfare.mp3"],
    volume: 0.5,
  }),
  brickMove: new Howl({
    src: ["/sfx/mp3/brick-move.mp3"],
    volume: 0.3,
  }),
  brickTake: new Howl({
    src: ["/sfx/mp3/brick-take.mp3"],
    volume: 0.2,
  }),
  brickCastle: new Howl({
    src: ["/sfx/mp3/brick-castle.mp3"],
    volume: 0.3,
  }),
  coneMove: new Howl({
    src: ["/sfx/mp3/cone-move.mp3"],
    volume: 1,
  }),
  coneTake: new Howl({
    src: ["/sfx/mp3/cone-take.mp3"],
    volume: 0.3,
  }),
  pipiMove: new Howl({
    src: ["/sfx/mp3/pipi-move.mp3"],
    volume: 0.5,
  }),
  pipiTake: new Howl({
    src: ["/sfx/mp3/pipi-take.mp3"],
    volume: 0.3,
  }),
  toyMove: new Howl({
    src: ["/sfx/mp3/toy-move.mp3"],
    volume: 0.5,
  }),
  toyTake: new Howl({
    src: ["/sfx/toy-take.wav"],
    volume: 0.5,
  }),
};

export default sfx;
