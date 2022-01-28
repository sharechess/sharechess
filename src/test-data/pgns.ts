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

  `[Event "Rated Bullet game"]
[Site "https://lichess.org/cGLWSWdH"]
[Date "2022.01.26"]
[White "caderek"]
[Black "Gacioreks"]
[Result "1-0"]
[UTCDate "2022.01.26"]
[UTCTime "13:44:13"]
[WhiteElo "1350"]
[BlackElo "1385"]
[WhiteRatingDiff "+6"]
[BlackRatingDiff "-6"]
[Variant "Standard"]
[TimeControl "60+0"]
[ECO "A00"]
[Opening "Polish Opening: Wolferts Gambit"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. b4 e5 2. Bb2 c5 { A00 Polish Opening: Wolferts Gambit } 3. b5 d6 4. e3 c4 5. Bxc4 Be6 6. Bxe6 fxe6 7. Nf3 d5 8. Nxe5 Bd6 9. Nf3 Qf6 10. Bxf6 gxf6 11. O-O e5 12. d3 e4 13. dxe4 dxe4 14. Nd4 Be5 15. c3 a6 16. a4 axb5 17. Nxb5 Nc6 18. Qc2 Nb4 19. Qd2 Nh6 20. Rd1 O-O 21. Qe2 b6 22. Nd2 Nd3 23. Nxe4 Nxf2 24. Qxf2 Nf5 25. Qxf5 Bxc3 26. Qe6+ Rf7 27. Nbxc3 Rc8 28. Qxc8+ Kg7 29. Qe6 Re7 30. Qxf6+ Kg8 31. Ng5 Rg7 32. Rd8# { White wins by checkmate. } 1-0`,

  `[Event "Casual Correspondence game"]
[Site "https://lichess.org/3torGyiS"]
[Date "2022.01.27"]
[White "lichess AI level 1"]
[Black "caderek"]
[Result "0-1"]
[UTCDate "2022.01.27"]
[UTCTime "22:35:13"]
[WhiteElo "?"]
[BlackElo "1500"]
[Variant "Standard"]
[TimeControl "-"]
[ECO "A10"]
[Opening "English Opening: Anglo-Lithuanian Variation"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. d4 d6 2. Qd3 g6 3. Qxg6 Bg7 4. Qxg7 h6 5. Qxh8 f6 6. Qxg8+ Kd7 7. Qxd8+ Ke6 8. Qxc8+ Kf7 9. Qxb8 Kg6 10. Qxa8 Kh7 11. Qxa7 Kg6 12. Qxb7 Kh5 13. Qxc7 Kg6 14. Qxe7 Kh5 15. Qxd6 Kg4 16. Qxf6 Kh5 17. Qxh6+ Kg4 18. a4 Kf5 19. a5 Ke4 20. a6 Kd5 21. a7 Kc4 22. a8=Q Kb4 23. d5 Kb5 24. d6 Kb6 25. d7+ Kb5 26. d8=Q Kb4 27. c3+ Kb3 28. g4 Kc2 29. g5 Kb3 30. g6 Kc2 31. g7 Kb3 32. g8=Q+ Kc2 33. Qgh8 Kb3 34. f4 Kc2 35. f5 Kb3 36. f6 Kc2 37. e4 Kb3 38. e5 Kc2 39. e6 Kb3 40. f7 Kc2 41. f8=Q Kb3 42. e7 Kc2 43. e8=Q Kb3 44. h4 Kc2 45. h5 Kb3 46. Qhg5 Kc2 47. h6 Kb3 48. h7 Kc2 49. Qhg7 Kb3 50. h8=Q Kc2 51. b4 Kb3 52. b5 Kc2 53. b6 Kb3 54. b7 Kc2 55. Bb5 Kb3 56. b8=Q Kc2 57. c4 Kb3 58. c5 Kc2 59. c6 Kb3 60. c7 Kc2 61. Qba7 Kb3 62. Q7f6 Kc2 63. c8=Q+ Kb3 64. Qf8f7+ Kb4 65. Qdd6#`,
];

export default pgns;
