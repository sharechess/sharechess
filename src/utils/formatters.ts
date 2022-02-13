const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date: string) => {
  const [y, m, d] = date.split(".").map(Number);

  const month = Number.isNaN(m) ? null : MONTHS[m - 1];
  const day = Number.isNaN(d) || month === null ? null : d;
  const year = Number.isNaN(y) ? null : y;

  return month && day && year
    ? `${month} ${day}, ${year}`
    : month && year
    ? `${month} ${year}`
    : year
    ? String(year)
    : "";
};

const formatName = (name: string) => {
  return name
    .split(",")
    .map((x) => x.trim())
    .reverse()
    .join(" ");
};

export { formatDate, formatName };
