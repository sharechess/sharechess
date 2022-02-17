type Result =
  | { error: false; pgn: string; side: "w" | "b" }
  | { error: true; errorType: "INCORRECT_LINK" | "SERVER_ERROR" };

const importFromLichess = async (url: URL): Promise<Result> => {
  const [first, second] = url.pathname
    .replace(/^\//, "")
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

    return {
      error: false,
      pgn,
      side:
        String(second).startsWith("black") || url.hash.startsWith("black")
          ? "b"
          : "w",
    };
  }

  return { error: true, errorType: "INCORRECT_LINK" };
};

const importFromLink = async (link: string): Promise<Result> => {
  let url;

  try {
    url = new URL(link);
  } catch {
    return { error: true, errorType: "INCORRECT_LINK" };
  }

  if (/^(www\.)*lichess\.org/.test(url.hostname)) {
    return importFromLichess(url);
  }

  return { error: true, errorType: "INCORRECT_LINK" };
};

export default importFromLink;
