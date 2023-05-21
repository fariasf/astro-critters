import { bold, cyan, dim, red, green } from "kleur/colors";

const pkgName = "astro-critters-slim";

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const prefix = (color) => {
  return `${dim(dateTimeFormat.format(new Date()))} ${bold(
    color("[astro-critters-slim]")
  )}`;
};

const info = (msg) => {
  console.log(`${prefix(cyan)} ${msg}`);
};

const error = (msg) => {
  console.log(`${prefix(red)} ${msg}`);
};

const success = (msg) => {
  console.log(`${prefix(green)} ${msg}`);
};

export default { info, error, success };
