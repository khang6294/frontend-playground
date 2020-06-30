import axios, { AxiosResponse } from "axios";
import { Request, Response, NextFunction } from "express";

export const getMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({ message: "hello" });
  } catch (err) {
    next(err);
  }
};
