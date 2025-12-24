import { ErrorRequestHandler } from "express";
import logger from "../utils/logger";

export default function errorMiddleware(): ErrorRequestHandler {
  return (error, _request, response, _next) => {
    logger.error({ error }, "An error occurred while processing the request");
    return response.status(500).json({
      message: "Internal Server Error",
    });
  };
}
