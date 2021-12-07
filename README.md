# logger [![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https://raw.githubusercontent.com/DevArtSite/logger/master/mod.ts)

> Simple logger

## Usage

```ts
import Logger from "https://raw.githubusercontent.com/DevArtSite/logger/master/mod.ts";

const logger = new Logger({
  prefix: "Prefix - "
});
logger.debug("Debug");
logger.error("Error");
logger.info("Info");
logger.log("Log");
logger.success("Success");
logger.warn("Warn")
```
