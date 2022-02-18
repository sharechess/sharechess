const isLink = (text: string | null) => {
  if (text === null) {
    return false;
  }

  try {
    new URL(text);
    return true;
  } catch {
    return false;
  }
};

export default isLink;
