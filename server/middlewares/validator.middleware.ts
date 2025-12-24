import { RequestHandler } from "express";
import z from "zod";

export default function validator(schema: z.ZodSchema): RequestHandler {
  return async (request, response, next) => {
    try {
      const data = {
        ...request.body,
      };
      await schema.parseAsync(data);
      next();
    } catch (error) {
      return response.status(400).json({
        message: "Validation Error",
        errors: error.errors,
      });
    }
  };
}
