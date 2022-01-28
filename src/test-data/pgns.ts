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

  `[Event "Casual Bullet game"]
[Site "https://lichess.org/R3wUJdwo"]
[Date "2022.01.28"]
[White "caderek"]
[Black "thrillhouse742"]
[Result "0-1"]
[UTCDate "2022.01.28"]
[UTCTime "20:53:46"]
[WhiteElo "1328"]
[BlackElo "1819"]
[Variant "Standard"]
[TimeControl "60+0"]
[ECO "A00"]
[Opening "Polish Opening"]
[Termination "Time forfeit"]
[Annotator "lichess.org"]

1. b4 { A00 Polish Opening } d5 2. Bb2 Nf6 3. e3 Bg4 4. Be2 Bxe2 5. Qxe2 e6 6. Nf3 Nbd7 7. O-O?? { (0.00 → -1.69) Blunder. b5 was best. } (7. b5 a6 8. a4 axb5 9. axb5 Rxa1 10. Bxa1 Bd6 11. O-O e5) 7... c6? { (-1.69 → -0.17) Mistake. Bxb4 was best. } (7... Bxb4 8. d3 O-O 9. Nbd2 Re8 10. Rab1 a5 11. Ba1 Qc8 12. c4 c6 13. Ne5 Nxe5 14. Bxe5) 8. a3 Bd6 9. d3 Rc8? { (-0.08 → 0.95) Mistake. O-O was best. } (9... O-O 10. c4) 10. Nbd2?! { (0.95 → 0.14) Inaccuracy. e4 was best. } (10. e4) 10... Bb8?! { (0.14 → 0.86) Inaccuracy. O-O was best. } (10... O-O 11. c4 e5 12. Rfc1 Re8 13. cxd5 cxd5 14. Nb3 Nf8 15. Rxc8 Qxc8 16. Rc1 Qd7 17. Nc5) 11. c4?! { (0.86 → 0.21) Inaccuracy. e4 was best. } (11. e4 O-O 12. e5 Ng4 13. c4 dxc4 14. Nxc4 Nh6 15. Rac1 Nb6 16. Na5 Qd7 17. Nb3 Na4) 11... dxc4?! { (0.21 → 1.06) Inaccuracy. O-O was best. } (11... O-O 12. e4) 12. dxc4 O-O 13. Qd1?! { (1.18 → 0.63) Inaccuracy. c5 was best. } (13. c5 b6 14. cxb6 Qxb6 15. Nc4 Qa6 16. Bxf6 Nxf6 17. Nd4 Qb7 18. Nb3 Nd7 19. Nca5 Qb5) 13... Qc7 14. g3 Ng4?! { (0.77 → 1.38) Inaccuracy. b6 was best. } (14... b6) 15. h3?? { (1.38 → -0.17) Blunder. c5 was best. } (15. c5) 15... Ngf6? { (-0.17 → 1.03) Mistake. Nxe3 was best. } (15... Nxe3 16. fxe3) 16. Kg2 Nh5 17. Ne4 Ndf6?! { (1.05 → 1.65) Inaccuracy. c5 was best. } (17... c5 18. b5 Rcd8 19. Qe2 h6 20. Nh4 Ndf6 21. Nxf6+ Nxf6 22. Bxf6 gxf6 23. a4 Rd7 24. Nf3) 18. Nxf6+ Nxf6 19. Qd4?! { (1.47 → 0.68) Inaccuracy. Bxf6 was best. } (19. Bxf6) 19... Rfd8 20. Qc3 Kf8?! { (0.68 → 1.36) Inaccuracy. Qe7 was best. } (20... Qe7 21. Qc2 e5 22. e4 Ne8 23. c5 f6 24. Bc1 Nc7 25. Be3 Ne6 26. a4 Qf7 27. Nh4) 21. Rad1?! { (1.36 → 0.77) Inaccuracy. Qc2 was best. } (21. Qc2 Kg8) 21... Rxd1 22. Rxd1 Rd8 23. Rxd8+ Qxd8 24. Ng5 h6? { (0.64 → 1.97) Mistake. Kg8 was best. } (24... Kg8 25. Ne4) 25. Nh7+ Nxh7?? { (2.04 → 6.18) Blunder. Kg8 was best. } (25... Kg8 26. Nxf6+) 26. Qxg7+ Ke7 27. Qxh7 Qd7 28. Qxh6 Kd8 29. Qg5+ Kc7 30. Qf4+ Qd6 31. Qxd6+ Kxd6 32. f4 Kd7 33. Be5 Bxe5 34. fxe5 a6 35. g4 Ke7 36. h4 f6 37. h5 fxe5 38. Kg3 Kf6 39. h6 Kg6 40. h7 Kxh7 { Black wins on time. } 0-1`,

  `[Event "Rated Bullet game"]
[Site "https://lichess.org/tfEplTYl"]
[Date "2022.01.28"]
[White "PHOS747"]
[Black "caderek"]
[Result "0-1"]
[UTCDate "2022.01.28"]
[UTCTime "22:35:37"]
[WhiteElo "1335"]
[BlackElo "1325"]
[WhiteRatingDiff "-6"]
[BlackRatingDiff "+6"]
[Variant "Standard"]
[TimeControl "60+0"]
[ECO "B20"]
[Opening "Sicilian Defense: Bowdler Attack"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. e4 c5 2. Bc4 { B20 Sicilian Defense: Bowdler Attack } Nc6 3. Qf3 Ne5 4. Qc3 Nxc4 5. Qxc4 b6 6. Nh3 e6 7. Ng5 Qxg5 8. d4 Qxc1+ 9. Ke2 Qxh1 10. f4 Qxg2+ 11. Ke3 Qxh2 12. Nd2 Qh3+ 13. Nf3 Nf6 14. e5 Ng4+ 15. Ke4 Bb7+ 16. Kd3 Qxf3+ 17. Kd2 Qe3+ 18. Kd1 Nf2# { Black wins by checkmate. } 0-1`,
];

export default pgns;
