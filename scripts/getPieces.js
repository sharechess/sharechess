const getBackgroundUrl = (element, prop) => {
  const style = window.getComputedStyle(element);
  return style.getPropertyValue(prop).replace('url("', "").replace('")', "");
};

const items = {
  kw: "",
  qw: "",
  rw: "",
  bw: "",
  nw: "",
  pw: "",
  kb: "",
  qb: "",
  rb: "",
  bb: "",
  nb: "",
  pb: "",
};

document.querySelectorAll("cg-board > piece").forEach((item) => {
  const color = item.classList.contains("black") ? "b" : "w";
  const type = item.classList.contains("pawn")
    ? "p"
    : item.classList.contains("king")
    ? "k"
    : item.classList.contains("queen")
    ? "q"
    : item.classList.contains("bishop")
    ? "b"
    : item.classList.contains("rook")
    ? "r"
    : "n";

  const url = getBackgroundUrl(item, "background-image");

  items[`${type}${color}`] = url;
});

console.log(JSON.stringify(items, null, 2));
