const pgns = [
  `[Event "Paris"]
[Site "Paris FRA"]
[Date "1858.??.??"]
[EventDate "?"]
[Round "?"]
[Result "1-0"]
[White "Paul Morphy"]
[Black "Duke Karl / Count Isouard"]
[ECO "C41"]
[WhiteElo "?"]
[BlackElo "?"]
[PlyCount "33"]

1.e4 e5 2.Nf3 d6 3.d4 Bg4 {This is a weak move
already.--Fischer} 4.dxe5 Bxf3 5.Qxf3 dxe5 6.Bc4 Nf6 7.Qb3 Qe7
8.Nc3 c6 9.Bg5 {Black is in what's like a zugzwang position
here. He can't develop the [Queen's] knight because the pawn
is hanging, the bishop is blocked because of the
Queen.--Fischer} b5 10.Nxb5 cxb5 11.Bxb5+ Nbd7 12.O-O-O Rd8
13.Rxd7 Rxd7 14.Rd1 Qe6 15.Bxd7+ Nxd7 16.Qb8+ Nxb8 17.Rd8# 1-0`,

  `[Event "Karpov - Kasparov World Championship Match"]
[Site "Moscow URS"]
[Date "1985.10.15"]
[EventDate "?"]
[Round "16"]
[Result "0-1"]
[White "Anatoly Karpov"]
[Black "Garry Kasparov"]
[ECO "B44"]
[WhiteElo "?"]
[BlackElo "?"]
[PlyCount "80"]

1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nb5 d6 6.c4 Nf6 7.N1c3
a6 8.Na3 d5 9.cxd5 exd5 10.exd5 Nb4 11.Be2 Bc5 12.O-O O-O
13.Bf3 Bf5 14.Bg5 Re8 15.Qd2 b5 16.Rad1 Nd3 17.Nab1 h6 18.Bh4
b4 19.Na4 Bd6 20.Bg3 Rc8 21.b3 g5 22.Bxd6 Qxd6 23.g3 Nd7
24.Bg2 Qf6 25.a3 a5 26.axb4 axb4 27.Qa2 Bg6 28.d6 g4 29.Qd2
Kg7 30.f3 Qxd6 31.fxg4 Qd4+ 32.Kh1 Nf6 33.Rf4 Ne4 34.Qxd3 Nf2+
35.Rxf2 Bxd3 36.Rfd2 Qe3 37.Rxd3 Rc1 38.Nb2 Qf2 39.Nd2 Rxd1+
40.Nxd1 Re1+ 0-1`,

  `[Event "Hoogovens Group A"]
[Site "Wijk aan Zee NED"]
[Date "1999.01.20"]
[EventDate "1999.01.16"]
[Round "4"]
[Result "1-0"]
[White "Garry Kasparov"]
[Black "Veselin Topalov"]
[ECO "B07"]
[WhiteElo "2812"]
[BlackElo "2700"]
[PlyCount "87"]

1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5
7. Nge2 Nbd7 8. Bh6 Bxh6 9. Qxh6 Bb7 10. a3 e5 11. O-O-O Qe7
12. Kb1 a6 13. Nc1 O-O-O 14. Nb3 exd4 15. Rxd4 c5 16. Rd1 Nb6
17. g3 Kb8 18. Na5 Ba8 19. Bh3 d5 20. Qf4+ Ka7 21. Rhe1 d4
22. Nd5 Nbxd5 23. exd5 Qd6 24. Rxd4 cxd4 25. Re7+ Kb6
26. Qxd4+ Kxa5 27. b4+ Ka4 28. Qc3 Qxd5 29. Ra7 Bb7 30. Rxb7
Qc4 31. Qxf6 Kxa3 32. Qxa6+ Kxb4 33. c3+ Kxc3 34. Qa1+ Kd2
35. Qb2+ Kd1 36. Bf1 Rd2 37. Rd7 Rxd7 38. Bxc4 bxc4 39. Qxh8
Rd3 40. Qa8 c3 41. Qa4+ Ke1 42. f4 f5 43. Kc1 Rd2 44. Qa7 1-0`,

  `[Event "Live Chess - chess"]
[Site "Chess.com"]
[Date "2022.01.15"]
[Round "?"]
[White "caderek"]
[Black "chinojaime"]
[Result "1-0"]
[TimeControl "60"]
[WhiteElo "758"]
[BlackElo "717"]
[Termination "caderek won on time"]

1. b4 e5 2. Bb2 d6 3. e3 Nf6 4. Be2 Be7 5. Nf3 Bg4 6. O-O h5 7. d3 Bxf3 8. Bxf3
h4 9. Bxb7 Nbd7 10. Bxa8 Qxa8 11. Qf3 Qxf3 12. gxf3 g5 13. Kh1 Nh5 14. Rg1 f6
15. Nd2 Nb6 16. c4 Na4 17. Bc1 Nc3 18. Ne4 Ne2 19. Re1 Nxc1 20. Raxc1 d5 21.
cxd5 Bxb4 22. Red1 Ba3 23. Rxc7 Kd8 24. Rc6 Bf8 25. Nxf6 Bg7 26. Nxh5 Rxh5 27.
Rdc1 Bf6 28. Rc8+ 1-0`,

  `[Event "<1500 SuperBlitz Arena"]
[Site "https://lichess.org/7xdEf3QT"]
[Date "2022.01.13"]
[White "ahmtchess"]
[Black "caderek"]
[Result "0-1"]
[UTCDate "2022.01.13"]
[UTCTime "18:25:29"]
[WhiteElo "1449"]
[BlackElo "1484"]
[WhiteRatingDiff "-8"]
[BlackRatingDiff "+14"]
[Variant "Standard"]
[TimeControl "180+0"]
[ECO "B30"]
[Opening "Sicilian Defense: Old Sicilian"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. e4 c5 2. Nf3 Nc6 { B30 Sicilian Defense: Old Sicilian } 3. Bc4 g6 4. c3 e5? { (0.35 → 1.61) Mistake. Nf6 was best. } (4... Nf6 5. e5 d5 6. Bb5 Nd7 7. O-O Qb6 8. Na3 Bg7 9. Re1) 5. O-O?! { (1.61 → 0.63) Inaccuracy. d4 was best. } (5. d4 cxd4 6. cxd4 exd4 7. Nxd4 Nf6 8. O-O Bg7 9. Nb5 O-O) 5... Bg7 6. Re1?! { (0.95 → 0.10) Inaccuracy. d4 was best. } (6. d4 exd4 7. cxd4 cxd4 8. Bf4 d6 9. Qb3 Na5 10. Bb5+ Nc6) 6... Nf6?? { (0.10 → 2.28) Blunder. Nge7 was best. } (6... Nge7 7. b4 cxb4 8. cxb4 O-O 9. Nc3 a6 10. a4 Nxb4 11. Ba3) 7. h3?? { (2.28 → 0.18) Blunder. d4 was best. } (7. d4) 7... O-O 8. d3 d5 9. exd5 Nxd5 10. d4? { (0.00 → -1.06) Mistake. Nbd2 was best. } (10. Nbd2 b6 11. Bb5 Bb7 12. Bxc6 Bxc6 13. Nxe5 Bxe5 14. Rxe5 Nf4 15. Ne4 Nxd3 16. Bg5 f6) 10... exd4 11. cxd4?! { (-0.88 → -1.78) Inaccuracy. Bg5 was best. } (11. Bg5 Qd7 12. cxd4 h6 13. Bxd5 hxg5 14. Bxc6 bxc6 15. Nbd2 cxd4 16. Rc1 Qd5 17. Ne4 Qxa2) 11... cxd4?! { (-1.78 → -0.76) Inaccuracy. Nxd4 was best. } (11... Nxd4 12. Nxd4 cxd4 13. Nd2 Be6 14. Ne4 Ne3 15. Bxe3 Bxc4 16. Bg5 Qb6 17. Qf3 f5 18. Nd2) 12. Nxd4?? { (-0.76 → -8.14) Blunder. Bg5 was best. } (12. Bg5 Qd6 13. Nbd2 Bf5 14. Rc1 h6 15. Bh4 Nf4 16. Ne4 Bxe4 17. Rxe4 Rae8 18. Rxe8 Rxe8) 12... Nxd4 13. Nc3 Nxc3 14. bxc3 Nc6 15. Bb2 Qxd1 16. Raxd1 a6 17. a4 Rb8 18. Re2 b5 19. axb5 axb5 20. Bd3 Be6 21. Bc2 b4 22. cxb4 Bxb2 23. Rb1 Bc3 24. b5 Nd4 25. Rxe6 fxe6 26. Ba4 Ne2+ 27. Kh2? { (-8.93 → Mate in 8) Checkmate is now unavoidable. Kf1 was best. } (27. Kf1 Ng3+) 27... Be5+ 28. g3 Rxf2+ 29. Kh1 Nxg3+ 30. Kg1 Ra2 31. Bb3 Bd4# { Black wins by checkmate. } 0-1`,

  `[Event "Casual Bullet game"]
[Site "https://lichess.org/OWjQmLN9"]
[Date "2022.01.12"]
[White "Anonymous"]
[Black "Anonymous"]
[Result "1-0"]
[UTCDate "2022.01.12"]
[UTCTime "20:40:08"]
[WhiteElo "?"]
[BlackElo "?"]
[Variant "Standard"]
[TimeControl "120+1"]
[ECO "A00"]
[Opening "Polish Opening"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. b4 { A00 Polish Opening } d5 2. Bb2 Nf6 3. Nf3 Nc6 4. b5 Nb8 5. e3 Bd7 6. Be2 c6 7. a4 cxb5 8. Bxb5 Bxb5 9. axb5 Qb6 10. Nc3 e6 11. O-O Be7 12. Nd4 O-O 13. d3 e5 14. Nf3 d4 15. exd4 exd4 16. Ne4 Nxe4 17. dxe4 Qxb5 18. Bxd4 Nc6 19. Rb1 Qa6 20. Ba1 Rfd8 21. Qe1 Rab8 22. e5 Bc5 23. e6 fxe6 24. Qxe6+ Kh8 25. Ng5 Re8 26. Nf7+ Kg8 27. Nh6+ Kf8 28. Qf7# { White wins by checkmate. } 1-0`,

  `[Event "Casual Bullet game"]
[Site "https://lichess.org/h3IEiExz"]
[Date "2022.01.13"]
[White "Anonymous"]
[Black "Anonymous"]
[Result "1-0"]
[UTCDate "2022.01.13"]
[UTCTime "03:00:43"]
[WhiteElo "?"]
[BlackElo "?"]
[Variant "Standard"]
[TimeControl "120+1"]
[ECO "A00"]
[Opening "Polish Opening"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. b4 { A00 Polish Opening } d5 2. Bb2 e6 3. e3 f6 4. b5 Bd7 5. a4 a6 6. Nc3 axb5 7. axb5 Rxa1 8. Bxa1 Ne7 9. Nf3 c6 10. bxc6 bxc6 11. Be2 c5 12. O-O c4 13. d3 cxd3 14. Qxd3 Nbc6 15. Nb5 Nb8 16. Nd6# { White wins by checkmate. } 1-0`,

  `[Event "Casual Bullet game"]
[Site "https://lichess.org/63Ayn7j6"]
[Date "2022.01.14"]
[White "Anonymous"]
[Black "Anonymous"]
[Result "0-1"]
[UTCDate "2022.01.14"]
[UTCTime "02:03:45"]
[Variant "Standard"]
[TimeControl "60+0"]
[ECO "A01"]
[Opening "Nimzo-Larsen Attack: Indian Variation"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. b3 Nf6 { A01 Nimzo-Larsen Attack: Indian Variation } 2. Bb2 g6 3. Nc3 Bg7 4. d3 O-O 5. Qd2 d5 6. O-O-O e6 7. Nf3 Nbd7 8. e4 a5 9. exd5 Nxd5 10. Nxd5 exd5 11. Bxg7 Kxg7 12. g3 b5 13. Bg2 a4 14. b4 a3 15. Nd4 c6 16. Nb3 Nf6 17. Nc5 Nd7 18. Rhe1 Nxc5 19. d4 Na4 20. c3 Nb2 21. Kb1 Bf5+ 22. Ka1 Nxd1 23. Qxd1 Qf6 24. Qf3 Rae8 25. g4 Rxe1+ 26. Qd1 Rxd1# { Black wins by checkmate. } 0-1`,
];

export default pgns;
