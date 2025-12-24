import "dotenv/config";
import express from "express";
import logger from "./utils/logger";
import router from "./router";
import errorMiddleware from "./middlewares/error.middleware";

const app = express();

app.use(express.static("dist"));

app.use("/api", router);

app.use(errorMiddleware());

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

server.on("error", (error) => {
  if (error.message.includes("EADDRINUSE")) {
    logger.error(`Port ${PORT} is already in use.`);
  } else {
    logger.fatal(error, "Server encountered a fatal error.");
  }
  process.exit(1);
});
