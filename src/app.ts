import express from "express";
import { errorHandler } from "./error";

export const app = express();

app.use(express.json());

app.use(errorHandler);
