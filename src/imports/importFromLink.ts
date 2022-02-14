type Result =
  | { error: false; pgn: string; side: "w" | "b" }
  | { error: true; errorType: "INCORRECT_LINK" | "SERVER_ERROR" };

const importFromLichess = async (link: string): Promise<Result> => {
  const [first, second] = link
    .replace(/^https:\/\/(www\.)*lichess\.org\/*/, "")
    .split("/")
    .map((x) => x.trim());

  if (/^(([a-z0-9]{8})|([a-z0-9]{12}))$/i.test(first)) {
    const id = first.slice(0, 8);

    const res = await fetch(
      `https://lichess.org/game/export/${id}?evals=0&clocks=0`
    );

    if (!String(res.status).startsWith("2")) {
      return { error: true, errorType: "SERVER_ERROR" };
    }

    const pgn = await res.text();

    return { error: false, pgn, side: second === "black" ? "b" : "w" };
  }

  return { error: true, errorType: "INCORRECT_LINK" };
};

const importFromLink = async (link: string): Promise<Result> => {
  if (/^https:\/\/(www\.)*lichess\.org/.test(link)) {
    return importFromLichess(link);
  }

  return { error: true, errorType: "INCORRECT_LINK" };
};

export default importFromLink;
