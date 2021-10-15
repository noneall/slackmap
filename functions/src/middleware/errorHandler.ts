import { ErrorRequestHandler } from "express";
import { ErrorCode } from "@slack/web-api";

export const errorResponder: ErrorRequestHandler = (error, _req, res) => {
  if (error.statusCode) {
    res.status(500).send(JSON.stringify(error, null, 4));
  } else {
    if (error.code === ErrorCode.PlatformError) {
      console.log(error.data);
    }
    res.status(500).send(JSON.stringify(error, null, 4));
  }
};