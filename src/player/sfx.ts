import { Howl } from "howler";

const sfx = {
  move: new Howl({
    src: ["/sfx/move.mp3"],
    volume: 0.3,
  }),
  take: new Howl({
    src: ["/sfx/take.mp3"],
    volume: 0.9,
  }),
  swap: new Howl({
    src: ["/sfx/swap.mp3"],
    volume: 0.6,
  }),
  snap: new Howl({
    src: ["/sfx/snap.mp3"],
    volume: 0.6,
  }),
  rewind: new Howl({
    src: ["/sfx/rewind.mp3"],
    volume: 0.2,
  }),
  enPassant: new Howl({
    src: ["/sfx/anarchy/en-passant.mp3"],
    volume: 0.5,
  }),
  horsyMove: new Howl({
    src: ["/sfx/anarchy/horsy-move.mp3"],
    volume: 0.5,
  }),
  horsyTake: new Howl({
    src: ["/sfx/anarchy/horsy-take.mp3"],
    volume: 0.5,
  }),
  brickMove: new Howl({
    src: ["/sfx/anarchy/brick-move.mp3"],
    volume: 0.3,
  }),
  brickTake: new Howl({
    src: ["/sfx/anarchy/brick-take.mp3"],
    volume: 0.2,
  }),
  brickCastle: new Howl({
    src: ["/sfx/anarchy/brick-castle.mp3"],
    volume: 0.3,
  }),
  coneMove: new Howl({
    src: ["/sfx/anarchy/cone-move.mp3"],
    volume: 1,
  }),
  coneTake: new Howl({
    src: ["/sfx/anarchy/cone-take.mp3"],
    volume: 0.3,
  }),
  pipiMove: new Howl({
    src: ["/sfx/anarchy/pipi-move.mp3"],
    volume: 0.2,
  }),
  pipiTake: new Howl({
    src: ["/sfx/anarchy/pipi-take.mp3"],
    volume: 0.4,
  }),
  toyMove: new Howl({
    src: ["/sfx/anarchy/toy-move.mp3"],
    volume: 0.9,
  }),
  toyTake: new Howl({
    src: ["/sfx/anarchy/toy-take.mp3"],
    volume: 0.8,
  }),
  deathMove: new Howl({
    src: ["/sfx/anarchy/death-move.mp3"],
    volume: 0.4,
  }),
  deathTake: new Howl({
    src: ["/sfx/anarchy/death-take.mp3"],
    volume: 0.25,
  }),
  death: new Howl({
    src: ["/sfx/anarchy/checkmate.mp3"],
    volume: 1,
  }),
  hit: new Howl({
    src: ["/sfx/anarchy/hit.mp3"],
    volume: 0.25,
  }),
};

export default sfx;
