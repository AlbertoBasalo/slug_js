export function getSlug(source, length = 100, timestamp, datestamp) {
  let cleanSource = String(source)
    .trim()
    .toLowerCase()
    .split(" ")
    .join("-")
    .split("’")
    .join("")
    .split("’")
    .join("")
    .split("?")
    .join("")
    .split(",")
    .join("")
    .split(":")
    .join("")
    .split(".")
    .join("")
    .split("#")
    .join("")
    .split("+")
    .join("")
    .replace("$", "dollar")
    .replace("€", "euros");

  if (cleanSource.length > length) {
    cleanSource = cleanSource.slice(0, length);
  }
  if (timestamp) {
    cleanSource += "_" + Date.now();
  }
  if (datestamp) {
    cleanSource += "_" + new Date().toISOString().slice(0, 10);
  }
  return cleanSource;
}
