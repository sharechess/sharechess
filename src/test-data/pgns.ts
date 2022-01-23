const pgns = [
  `[Event "Paris Opera"]
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

  `[White "Mamedyarov, Shakhriyar"]
[Black "Duda, Jan-Krzysztof"]
[Result "1-0"]
[WhiteElo "2767"]
[WhiteTitle "GM"]
[BlackElo "2760"]
[BlackTitle "GM"]
[UTCDate "2022.01.18"]
[UTCTime "06:12:53"]
[Variant "Standard"]
[ECO "D41"]
[Opening "Queen's Gambit Declined: Semi-Tarrasch Defense"]
[Annotator "https://lichess.org/@/ImaginaryGC"]

1. d4 { [%eval 0.3] [%clk 1:40:57] } 1... Nf6 { [%eval 0.0] [%clk 1:40:54] } 2. c4 { [%eval 0.23] [%clk 1:41:21] } 2... e6 { [%eval 0.28] [%clk 1:41:19] } 3. Nf3 { [%eval 0.0] [%clk 1:41:33] } 3... d5 { [%eval 0.22] [%clk 1:41:42] } 4. Nc3 { [%eval 0.0] [%clk 1:41:56] } 4... c5 { [%eval 0.25] [%clk 1:42:05] } 5. cxd5 { [%eval 0.15] [%clk 1:41:29] } 5... cxd4 { [%eval 0.35] [%clk 1:42:28] } 6. Qxd4 { [%eval 0.23] [%clk 1:41:10] } 6... exd5 { [%eval 0.3] [%clk 1:39:33] } 7. e4 { [%eval 0.2] [%clk 1:40:40] } 7... dxe4 { [%eval 0.25] [%clk 1:39:02] } 8. Qxd8+ { [%eval 0.62] [%clk 1:41:03] } 8... Kxd8 { [%eval 0.69] [%clk 1:39:28] } 9. Ng5 { [%eval 0.56] [%clk 1:41:29] } 9... Be6 { [%eval 0.52] [%clk 1:39:53] } 10. Nxe6+ { [%eval 0.61] [%clk 1:41:14] } 10... fxe6 { [%eval 0.69] [%clk 1:40:16] } 11. Bg5 { [%eval 0.62] [%clk 1:41:40] } 11... h6 { [%eval 0.84] [%clk 1:40:36] } 12. O-O-O+ { [%eval 0.56] [%clk 1:42:00] } 12... Ke7 { [%eval 0.78] [%clk 1:41:00] } 13. Bxf6+ { [%eval 0.62] [%clk 1:42:26] } 13... gxf6 { [%eval 0.78] [%clk 1:41:22] } 14. Nxe4 { [%eval 0.74] [%clk 1:42:52] } 14... f5 { [%eval 0.52] [%clk 1:41:41] } 15. Ng3 { [%eval 0.32] [%clk 1:42:12] } 15... h5 { [%eval 0.2] [%clk 1:32:18] } 16. Bc4 { [%eval -0.25] [%clk 1:36:11] } 16... Nd7 { [%eval 0.01] [%clk 1:32:01] } 17. Kb1 { [%eval -0.02] [%clk 1:28:51] } 17... Ne5 { [%eval -0.16] [%clk 1:14:13] } 18. Bb3 { [%eval -0.11] [%clk 1:29:07] } 18... Kf6 { [%eval 0.0] [%clk 1:14:25] } 19. Rhe1 { [%eval -0.07] [%clk 1:11:43] } 19... Re8 { [%eval -0.11] [%clk 1:11:28] } 20. Ba4 { [%eval 0.0] [%clk 1:01:21] } 20... Re7 { [%eval 0.04] [%clk 1:10:23] } 21. h4 { [%eval -0.18] [%clk 0:55:50] } 21... Ng6 { [%eval -0.15] [%clk 1:03:18] } 22. Rd4 { [%eval -0.36] [%clk 0:53:09] } 22... Rc7 { [%eval -0.26] [%clk 0:46:04] } 23. Bb3 { [%eval -0.53] [%clk 0:42:28] } 23... e5?! { [%eval 0.28] } { Inaccuracy. Rc6 was best. } { [%clk 0:37:17] } (23... Rc6) 24. Rd8?! { [%eval -0.6] } { Inaccuracy. Rd5 was best. } { [%clk 0:39:56] } (24. Rd5 Bb4 25. Re3 f4 26. Ne4+ Kf5 27. Re2 f3 28. gxf3 Nf4 29. Ng3+ Kg6 30. Rexe5 Nxd5) 24... Nxh4 { [%eval -0.69] [%clk 0:36:36] } 25. Re8?! { [%eval -1.27] } { Inaccuracy. Rh1 was best. } { [%clk 0:29:16] } (25. Rh1 Kg5) 25... Ng6 { [%eval -1.68] [%clk 0:27:37] } 26. Re6+ { [%eval -1.99] [%clk 0:29:12] } 26... Kg5 { [%eval -1.65] [%clk 0:25:50] } 27. Bc2?! { [%eval -2.35] } { Inaccuracy. f4+ was best. } { [%clk 0:26:15] } (27. f4+ exf4) 27... h4 { [%eval -2.92] [%clk 0:19:01] } 28. Re3 { [%eval -2.97] [%clk 0:26:25] } 28... e4? { [%eval -1.59] } { Mistake. Bg7 was best. } { [%clk 0:14:18] } (28... Bg7 29. Nxf5) 29. Nxf5 { [%eval -1.77] [%clk 0:25:53] } 29... Kxf5 { [%eval -1.74] [%clk 0:13:04] } 30. R3xe4 { [%eval -1.61] [%clk 0:26:00] } 30... Rxc2 { [%eval -1.61] [%clk 0:13:08] } 31. Kxc2 { [%eval -1.25] [%clk 0:26:26] } 31... Bc5? { [%eval 0.0] } { Mistake. Rh7 was best. } { [%clk 0:11:22] } (31... Rh7 32. Re8) 32. g4+ { [%eval 0.04] [%clk 0:24:43] } 32... Kg5 { [%eval 0.11] [%clk 0:06:52] } 33. f4+ { [%eval 0.02] [%clk 0:25:07] } 33... Nxf4 { [%eval 0.15] [%clk 0:07:06] } 34. R6e5+ { [%eval 0.22] [%clk 0:25:31] } 34... Kxg4 { [%eval 0.22] [%clk 0:07:30] } 35. Rxc5 { [%eval 0.34] [%clk 0:25:58] } 35... Kf3 { [%eval 0.49] [%clk 0:01:10] } 36. Rb4 { [%eval 0.41] [%clk 0:21:53] } 36... h3?? { [%eval 2.6] } { Blunder. Ng2 was best. } { [%clk 0:01:07] } (36... Ng2 37. Rc3+ Ne3+ 38. Kd2 Rd8+ 39. Rd3 Rxd3+ 40. Kxd3 h3 41. Rh4 Kg3 42. Rxh3+ Kxh3 43. Kxe3) 37. Rc3+ { [%eval 2.77] [%clk 0:22:09] } 37... Kg4 { [%eval 2.72] [%clk 0:01:21] } 38. Rcc4 { [%eval 2.98] [%clk 0:22:34] } 38... Rf8 { [%eval 2.82] [%clk 0:01:04] } 39. Rxb7 { [%eval 2.91] [%clk 0:22:51] } 39... h2? { [%eval 4.98] } { Mistake. Rf5 was best. } { [%clk 0:00:41] } (39... Rf5 40. Kb3) 40. Rh7 { [%eval 4.51] [%clk 0:23:09] } 40... Kg3 { [%eval 5.0] [%clk 0:01:04] } 41. Kb3 { [%eval 4.94] [%clk 0:16:30] } 1-0

`,

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

  `[Event "Casual Bullet game"]
[Site "https://lichess.org/kF9IVNaR"]
[Date "2022.01.20"]
[White "MG014"]
[Black "caderek"]
[Result "0-1"]
[UTCDate "2022.01.20"]
[UTCTime "05:03:34"]
[WhiteElo "1852"]
[BlackElo "1370"]
[Variant "Standard"]
[TimeControl "30+0"]
[ECO "A43"]
[Opening "Benoni Defense: Old Benoni"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. d4 c5 { A43 Benoni Defense: Old Benoni } 2. Nf3 cxd4 3. Qxd4 Nc6 4. Qd1 g6 5. Nc3 Bg7 6. Bf4 e6 7. e3 Nge7 8. Bd3 O-O 9. Qd2 d5 10. O-O-O b6 11. e4 a5 12. exd5 Nxd5 13. Nxd5 exd5 14. Bb5 Bb7 15. Bxc6 Bxc6 16. a3 Qf6 17. Rhe1 Qxb2# { Black wins by checkmate. } 0-1`,

  `[Event "Tata Steel Chess Masters 2022"]
[Site "Wijk aan Zee, Netherlands"]
[Date "2022.01.22"]
[Round "7.1"]
[White "Praggnanandhaa R"]
[Black "Carlsen, Magnus"]
[Result "0-1"]
[WhiteElo "2612"]
[BlackElo "2865"]
[UTCDate "2022.01.22"]
[UTCTime "13:08:27"]
[Variant "Standard"]
[ECO "D27"]
[Opening "Queen's Gambit Accepted: Classical Defense, Main Line"]
[Annotator "https://lichess.org/@/ImaginaryGC"]

1. d4 { [%eval 0.3] [%clk 1:40:32] } 1... d5 { [%eval 0.28] [%clk 1:39:39] } 2. c4 { [%eval 0.35] [%clk 1:40:46] } 2... e6 { [%eval 0.38] [%clk 1:40:04] } 3. Nf3 { [%eval 0.0] [%clk 1:41:11] } 3... dxc4 { [%eval 0.25] [%clk 1:40:27] } 4. e3 { [%eval 0.13] [%clk 1:39:16] } 4... a6 { [%eval 0.4] [%clk 1:39:48] } 5. Bxc4 { [%eval 0.25] [%clk 1:38:16] } 5... Nf6 { [%eval 0.2] [%clk 1:40:00] } 6. O-O { [%eval 0.17] [%clk 1:37:53] } 6... c5 { [%eval 0.36] [%clk 1:40:25] } 7. b3 { [%eval 0.19] [%clk 1:35:31] } 7... b6 { [%eval 0.58] [%clk 1:37:38] } 8. Ba3 { [%eval 0.78] [%clk 1:28:39] } 8... Nbd7 { [%eval 0.6] [%clk 1:35:08] } 9. d5 { [%eval 0.52] [%clk 1:27:25] } 9... exd5 { [%eval 0.7] [%clk 1:35:29] } 10. Bxd5 { [%eval 0.52] [%clk 1:27:50] } 10... Rb8 { [%eval 0.6] [%clk 1:34:05] } 11. Bb2 { [%eval 0.87] [%clk 1:19:12] } 11... Be7 { [%eval 0.59] [%clk 1:26:21] } 12. Nc3 { [%eval 0.58] [%clk 1:17:24] } 12... O-O { [%eval 1.03] [%clk 1:25:08] } 13. Qc2 { [%eval 1.0] [%clk 1:10:37] } 13... b5 { [%eval 0.69] [%clk 1:02:49] } 14. Rfd1?! { [%eval 0.17] } { Inaccuracy. Rad1 was best. } { [%clk 1:01:39] } (14. Rad1 Qc7 15. Ng5 g6 16. f4 c4 17. Ne6 fxe6 18. Bxe6+ Rf7 19. Nd5 Nxd5 20. Bxd5 Nf6) 14... Qc7?! { [%eval 0.91] } { Inaccuracy. h6 was best. } { [%clk 0:54:21] } (14... h6) 15. a4? { [%eval -0.52] } { Mistake. Ng5 was best. } { [%clk 0:48:20] } (15. Ng5 g6 16. h3 b4 17. Nce4 Nxd5 18. Rxd5 h6 19. Nf3 Bb7 20. Rd2 Qc6 21. Ng3 Nb6) 15... h6?! { [%eval 0.11] } { Inaccuracy. b4 was best. } { [%clk 0:39:23] } (15... b4) 16. axb5 { [%eval 0.33] [%clk 0:42:13] } 16... axb5 { [%eval 0.23] [%clk 0:39:47] } 17. Qe2 { [%eval 0.25] [%clk 0:36:43] } 17... Qb6 { [%eval -0.1] [%clk 0:30:41] } 18. e4 { [%eval 0.11] [%clk 0:32:56] } 18... Re8 { [%eval 0.04] [%clk 0:30:49] } 19. Qd2?! { [%eval -0.64] } { Inaccuracy. e5 was best. } { [%clk 0:26:08] } (19. e5) 19... Bf8 { [%eval -0.71] [%clk 0:24:56] } 20. Qf4 { [%eval -1.08] [%clk 0:23:07] } 20... b4 { [%eval -1.18] [%clk 0:22:47] } 21. Na4 { [%eval -1.21] [%clk 0:15:15] } 21... Nxd5 { [%eval -1.29] [%clk 0:23:11] } 22. Rxd5 { [%eval -1.26] [%clk 0:15:18] } 22... Qe6?! { [%eval -0.59] } { Inaccuracy. Qc6 was best. } { [%clk 0:19:20] } (22... Qc6) 23. Rad1?? { [%eval -2.8] } { Blunder. Nxc5 was best. } { [%clk 0:11:53] } (23. Nxc5 Bxc5) 23... Ra8 { [%eval -3.08] [%clk 0:12:30] } 24. Qc1 { [%eval -2.92] [%clk 0:06:43] } 24... Qxe4 { [%eval -2.73] [%clk 0:07:45] } 25. h3 { [%eval -2.68] [%clk 0:03:59] } 25... Ra7 { [%eval -2.94] [%clk 0:02:17] } 26. Qd2 { [%eval -3.28] [%clk 0:03:22] } 26... Qg6 { [%eval -2.87] [%clk 0:02:07] } 27. Nh4 { [%eval -3.12] [%clk 0:01:33] } 27... Qe6 { [%eval -3.07] [%clk 0:01:19] } 28. Nf5 { [%eval -3.49] [%clk 0:01:11] } 28... c4? { [%eval -1.57] } { Mistake. Bb7 was best. } { [%clk 0:01:03] } (28... Bb7 29. Nxh6+) 29. Qd4?? { [%eval -4.12] } { Blunder. Bxg7 was best. } { [%clk 0:00:36] } (29. Bxg7 Bxg7) 29... Nf6 { [%eval -4.18] [%clk 0:01:04] } 30. Nb6? { [%eval -8.81] } { Mistake. Nxg7 was best. } { [%clk 0:00:32] } (30. Nxg7 Bxg7 31. Rd6 Qxd6 32. Qxd6 Rd7 33. Bxf6 Rxd6 34. Rxd6 c3 35. Bxg7 Kxg7 36. Nxc3 bxc3) 30... c3 { [%eval -8.85] [%clk 0:01:14] } 31. Nxc8 { [%eval -8.95] [%clk 0:00:32] } 31... Qxd5 { [%eval -8.46] [%clk 0:01:25] } 32. Qxd5 { [%eval -9.12] [%clk 0:00:40] } 32... Nxd5 { [%eval -9.0] [%clk 0:01:52] } 33. Nxa7 { [%eval -9.05] [%clk 0:01:04] } 33... cxb2 { [%eval -9.13] [%clk 0:02:13] } 34. Rb1 { [%eval -9.07] [%clk 0:01:26] } 34... Re2 { [%eval -9.08] [%clk 0:02:34] } 0-1

`,

  `[Event "Tata Steel Chess Masters 2022"]
[Site "Wijk aan Zee, Netherlands"]
[Date "2022.01.23"]
[Round "8.5"]
[White "Vidit, Santosh Gujrathi"]
[Black "Grandelius, Nils"]
[Result "1-0"]
[WhiteElo "2727"]
[WhiteTitle "GM"]
[BlackElo "2672"]
[BlackTitle "GM"]
[UTCDate "2022.01.23"]
[UTCTime "05:58:34"]
[Variant "Standard"]
[ECO "A48"]
[Opening "East Indian Defense"]
[Annotator "https://lichess.org/@/ImaginaryGC"]

1. d4 { [%eval 0.3] [%clk 1:40:00] } 1... Nf6 { [%eval 0.0] [%clk 1:40:36] } 2. Nf3 { [%eval 0.12] [%clk 1:40:16] } 2... g6 { [%eval 0.21] [%clk 1:40:14] } 3. Nbd2 { [%eval 0.05] [%clk 1:40:35] } 3... Bg7 { [%eval 0.27] [%clk 1:37:22] } 4. e4 { [%eval 0.28] [%clk 1:40:53] } 4... O-O { [%eval 0.48] [%clk 1:37:00] } 5. e5 { [%eval 0.17] [%clk 1:41:02] } 5... Nh5 { [%eval 0.0] [%clk 1:35:41] } 6. g4 { [%eval 0.4] [%clk 1:41:20] } 6... Nf4 { [%eval 0.28] [%clk 1:36:08] } 7. Ne4 { [%eval 0.13] [%clk 1:41:42] } 7... d5 { [%eval 0.09] [%clk 1:36:32] } 8. Ng3 { [%eval 0.49] [%clk 1:41:39] } 8... Ne6 { [%eval 0.41] [%clk 1:36:56] } 9. Nf5 { [%eval 0.49] [%clk 1:42:00] } 9... c5 { [%eval 0.3] [%clk 1:35:57] } 10. Nxg7 { [%eval 0.36] [%clk 1:40:57] } 10... Nxg7 { [%eval 0.33] [%clk 1:31:50] } 11. h3 { [%eval 0.03] [%clk 1:40:22] } 11... cxd4 { [%eval 0.65] [%clk 1:22:13] } 12. Bh6 { [%eval 0.59] [%clk 1:38:52] } 12... Qa5+ { [%eval 0.78] [%clk 1:11:10] } 13. Qd2 { [%eval 0.53] [%clk 1:38:54] } 13... Qxd2+ { [%eval 0.55] [%clk 1:11:35] } 14. Nxd2 { [%eval 0.64] [%clk 1:38:50] } 14... Nc6 { [%eval 0.72] [%clk 1:07:19] } 15. f4 { [%eval 0.82] [%clk 1:39:08] } 15... f6 { [%eval 0.77] [%clk 0:52:13] } 16. exf6 { [%eval 0.72] [%clk 1:20:04] } 16... exf6 { [%eval 1.14] [%clk 0:52:03] } 17. O-O-O { [%eval 1.18] [%clk 1:05:59] } 17... Re8 { [%eval 0.98] [%clk 0:30:58] } 18. Nb3?! { [%eval 0.27] } { Inaccuracy. Rg1 was best. } { [%clk 0:57:25] } (18. Rg1 f5) 18... Ne6? { [%eval 1.75] } { Mistake. Bf5 was best. } { [%clk 0:30:35] } (18... Bf5 19. Rg1 Be4 20. Bxg7 Kxg7 21. Bb5 f5 22. g5 a5 23. Nxd4 Rac8 24. c3 Re7 25. h4) 19. Bg2 { [%eval 1.57] [%clk 0:45:26] } 19... Nc7 { [%eval 1.66] [%clk 0:30:46] } 20. f5?! { [%eval 0.8] } { Inaccuracy. Nxd4 was best. } { [%clk 0:33:48] } (20. Nxd4) 20... gxf5 { [%eval 0.85] [%clk 0:28:21] } 21. Rhf1 { [%eval 0.78] [%clk 0:30:49] } 21... Kf7?! { [%eval 1.36] } { Inaccuracy. fxg4 was best. } { [%clk 0:19:13] } (21... fxg4 22. Rxf6 gxh3 23. Bf3 Kh8 24. Nxd4 Bd7 25. Nxc6 Bxc6 26. Rf5 Ne6 27. Bg4 Rg8 28. Bxh3) 22. gxf5 { [%eval 1.38] [%clk 0:30:52] } 22... Rg8 { [%eval 1.24] [%clk 0:18:02] } 23. Rd2?! { [%eval 0.66] } { Inaccuracy. Bh1 was best. } { [%clk 0:30:20] } (23. Bh1 Bxf5 24. Rxf5 Kg6 25. Bf4 Ne6 26. Rxd5 Nxf4 27. Be4+ Kh6 28. Rd7 Rg7 29. Rd6 Ne2+) 23... Ne5?? { [%eval 2.57] } { Blunder. Bxf5 was best. } { [%clk 0:15:49] } (23... Bxf5) 24. Nxd4 { [%eval 2.71] [%clk 0:29:47] } 24... Bd7 { [%eval 2.5] [%clk 0:15:52] } 25. b3 { [%eval 2.19] [%clk 0:26:46] } 25... Rae8 { [%eval 2.45] [%clk 0:14:22] } 26. a4 { [%eval 2.42] [%clk 0:26:09] } 26... a6 { [%eval 2.58] [%clk 0:13:27] } 27. Bf4 { [%eval 2.87] [%clk 0:22:34] } 27... Re7 { [%eval 2.41] [%clk 0:10:15] } 28. Rff2 { [%eval 2.36] [%clk 0:20:54] } 28... Bc6 { [%eval 2.58] [%clk 0:09:23] } 29. Kb2 { [%eval 2.48] [%clk 0:14:28] } 29... Rd7?! { [%eval 3.22] } { Inaccuracy. Ke8 was best. } { [%clk 0:07:14] } (29... Ke8 30. c4) 30. Ka3 { [%eval 2.6] [%clk 0:13:36] } 30... Ne8 { [%eval 2.53] [%clk 0:04:54] } 31. c4 { [%eval 2.65] [%clk 0:05:49] } 31... Ng7?? { [%eval 6.14] } { Blunder. Nc7 was best. } { [%clk 0:01:19] } (31... Nc7) 32. Nxc6 { [%eval 6.78] [%clk 0:05:23] } 32... bxc6 { [%eval 6.36] [%clk 0:01:42] } 33. cxd5 { [%eval 6.58] [%clk 0:05:47] } 33... Rgd8 { [%eval 7.99] [%clk 0:00:42] } 34. dxc6 { [%eval 7.77] [%clk 0:05:00] } 1-0`,

  `[Event "Tata Steel Chess Masters 2022"]
[Site "Wijk aan Zee, Netherlands"]
[Date "2022.01.23"]
[Round "8.1"]
[White "Shankland, Sam"]
[Black "Carlsen, Magnus"]
[Result "1/2-1/2"]
[WhiteElo "2708"]
[WhiteTitle "GM"]
[BlackElo "2865"]
[BlackTitle "GM"]
[UTCDate "2022.01.23"]
[UTCTime "05:58:34"]
[Variant "Standard"]
[ECO "D32"]
[Opening "Tarrasch Defense: Schara Gambit"]
[Annotator "https://lichess.org/@/ImaginaryGC"]

1. d4 { [%eval 0.3] [%clk 1:40:56] } 1... d5 { [%eval 0.28] [%clk 1:39:45] } 2. c4 { [%eval 0.34] [%clk 1:41:19] } 2... e6 { [%eval 0.38] [%clk 1:40:10] } 3. Nc3 { [%eval 0.39] [%clk 1:41:41] } 3... c5 { [%eval 0.51] [%clk 1:40:34] } 4. cxd5 { [%eval 0.42] [%clk 1:41:06] } 4... cxd4 { [%eval 0.55] [%clk 1:40:23] } 5. Qa4+ { [%eval 0.69] [%clk 1:40:40] } 5... Bd7 { [%eval 0.84] [%clk 1:40:41] } 6. Qxd4 { [%eval 0.62] [%clk 1:41:05] } 6... exd5 { [%eval 0.67] [%clk 1:40:59] } 7. Qxd5 { [%eval 0.62] [%clk 1:40:40] } 7... Nf6 { [%eval 0.58] [%clk 1:41:16] } 8. Qb3 { [%eval 0.65] [%clk 1:36:01] } 8... Na6 { [%eval 0.49] [%clk 1:37:20] } 9. Nf3 { [%eval 0.47] [%clk 1:33:43] } 9... Nc5 { [%eval 0.46] [%clk 1:33:44] } 10. Qc2 { [%eval 0.45] [%clk 1:32:05] } 10... Rc8 { [%eval 0.61] [%clk 1:26:01] } 11. e3 { [%eval 0.46] [%clk 1:25:56] } 11... Nce4 { [%eval 0.89] [%clk 1:22:09] } 12. Bd3 { [%eval 0.56] [%clk 1:20:10] } 12... Nxc3 { [%eval 0.71] [%clk 1:18:12] } 13. bxc3 { [%eval 0.82] [%clk 1:20:36] } 13... Nd5 { [%eval 0.42] [%clk 1:11:14] } 14. O-O { [%eval 0.67] [%clk 1:15:00] } 14... Nxc3 { [%eval 0.61] [%clk 1:04:09] } 15. Bb2 { [%eval 0.86] [%clk 1:09:32] } 15... Bb4 { [%eval 0.46] [%clk 0:59:53] } 16. Bxc3 { [%eval 0.2] [%clk 0:51:52] } 16... Bxc3 { [%eval 0.41] [%clk 0:54:16] } 17. Rab1 { [%eval 0.12] [%clk 0:50:47] } 17... Bf6 { [%eval 0.19] [%clk 0:48:55] } 18. Qe2 { [%eval 0.18] [%clk 0:50:36] } 18... Rc7 { [%eval 0.18] [%clk 0:41:07] } 19. e4 { [%eval 0.0] [%clk 0:45:13] } 19... O-O { [%eval -0.05] [%clk 0:39:59] } 20. e5 { [%eval 0.0] [%clk 0:44:59] } 20... Be7 { [%eval -0.03] [%clk 0:40:18] } 21. Nd4 { [%eval 0.02] [%clk 0:40:02] } 21... Bc5 { [%eval 0.0] [%clk 0:27:25] } 22. e6 { [%eval 0.07] [%clk 0:36:59] } 22... Bxe6 { [%eval 0.07] [%clk 0:26:56] } 23. Nxe6 { [%eval 0.0] [%clk 0:37:14] } 23... fxe6 { [%eval 0.0] [%clk 0:27:23] } 24. Qxe6+ { [%eval 0.0] [%clk 0:35:49] } 24... Kh8 { [%eval 0.0] [%clk 0:27:52] } 25. Qh3 { [%eval -0.25] [%clk 0:25:18] } 25... h6 { [%eval -0.24] [%clk 0:28:03] } 26. Qg3 { [%eval -0.25] [%clk 0:23:54] } 26... Rd7 { [%eval -0.23] [%clk 0:22:53] } 27. Rb3 { [%eval -0.29] [%clk 0:16:26] } 27... Rf6 { [%eval -0.09] [%clk 0:23:05] } 28. h3 { [%eval -0.32] [%clk 0:12:54] } 28... b6 { [%eval -0.21] [%clk 0:20:08] } 29. Be2 { [%eval -0.43] [%clk 0:10:08] } 29... Rd2 { [%eval -0.21] [%clk 0:13:43] } 30. Rd3 { [%eval -0.23] [%clk 0:10:32] } 30... Rxd3 { [%eval -0.22] [%clk 0:13:33] } 31. Bxd3?! { [%eval -0.85] } { Inaccuracy. Qxd3 was best. } { [%clk 0:08:28] } (31. Qxd3 Qxd3 32. Bxd3 g5 33. Bb5 Rf4 34. g3 Rb4 35. a4 a6 36. Bxa6 Rxa4 37. Bb5 Rb4) 31... Qd6?! { [%eval -0.2] } { Inaccuracy. Qd5 was best. } { [%clk 0:13:52] } (31... Qd5) 32. Qxd6 { [%eval 0.0] [%clk 0:08:24] } 32... Rxd6 { [%eval -0.17] [%clk 0:14:19] } 33. Rd1 { [%eval 0.0] [%clk 0:08:31] } 33... g5 { [%eval -0.19] [%clk 0:14:39] } 34. Kf1 { [%eval -0.15] [%clk 0:07:54] } 34... Kg7 { [%eval -0.06] [%clk 0:14:07] } 35. Bc2 { [%eval -0.24] [%clk 0:08:02] } 1/2-1/2

`,
];

export default pgns;
