const isSafeLink = (text: string | null) => {
  if (text === null) {
    return false;
  }

  try {
    const url = new URL(text);
    return url.protocol === "https:";
  } catch {
    return false;
  }
};

export default isSafeLink;
