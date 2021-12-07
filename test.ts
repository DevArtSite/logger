import Logger from "./mod.ts";

Deno.test("Log\n", () => {
  const logger = new Logger({
    prefix: "Prefix - "
  });

  logger.debug("Debug");
  logger.error("Error");
  logger.info("Info");
  logger.log("Log");
  logger.success("Success");
  logger.warn("Warn")
});