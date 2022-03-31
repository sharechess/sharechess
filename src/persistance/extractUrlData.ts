// import { decompressPGN } from "../game/PGNHelpers";

// const HEADER_REGEX = /^#(pgn|fen)\//;

// const extractUrlData = () => {
//   const hash = window.location.hash;

//   if (!HEADER_REGEX.test(hash)) {
//     return {
//       pgn: "",
//       fen: "",
//     };
//   }

//   const [format, ...chunks] = hash.slice(1).split("/");

//   const data = chunks.join("/");

//   return {
//     pgn: format === "pgn" ? decompressPGN(data) : "",
//     fen: format === "fen" ? decodeURI(data) : "",
//   };
// };

// export default extractUrlData;
