import { RequestHandler } from "express";
export default function controller<T extends RequestHandler>(handler: T) {
  return handler;
}
