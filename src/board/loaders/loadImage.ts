const loadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img), { once: true });
    img.src = url;
  });
};

export default loadImage;
