import Critters from "critters";
import { glob } from "glob";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import logger from "./logger.js";

const filteredLogger = (msg) =>
  msg.startsWith("Time ") ? () => {} : logger.info(msg);

const processFiles = async (dir, options) => {
  if (options.pruneSource) {
    logger.error(`Option 'pruneSource' is not supported.`);
    return;
  }

  const path = options.path || fileURLToPath(dir);
  const files = await glob(`${path}**/*.html`, {
    ignore: options.exclude,
  });

  const critters = new Critters({
    ...options,
    path,
    logger: {
      trace: (msg) => filteredLogger(msg),
      debug: (msg) => filteredLogger(msg),
      info: (msg) => filteredLogger(msg),
      warn: (msg) => logger.warn(msg),
      error: (msg) => logger.error(msg),
    },
    logLevel: "info",
  });

  for await (const file of files) {
    logger.info(`./${file.replace(path, "")}…`);
    const html = await fs.readFile(file, "utf-8");
    const inlined = await critters.process(html);
    await fs.writeFile(file, inlined);
  }

  logger.success(`Crittered ${files.length} files`);
};

export default (options) => ({
  name: "astro-critters-slim",
  hooks: {
    "astro:build:done": ({ dir }) => processFiles(dir, options || {}),
  },
});
