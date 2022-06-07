const REGEX =
  /((\[[a-z0-9]+ +"[^"\n\r]+"](\r\n|\r|\n))*(\r\n|\r|\n)+){0,1}\d+\. *[a-h1-8x+#=.]+/i;

const isPGN = (data: string) => {
  return REGEX.test(data);
};

export default isPGN;
