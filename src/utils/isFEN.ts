const REGEX =
  /^([1-8kqrbnp]+\/)+[1-8kqrbnp]+ [wb] ([kq]+|-) ([a-h1-8]{2}|-) \d+ \d+$/i;

const isFEN = (data: string) => {
  return REGEX.test(data.trim());
};

export default isFEN;
