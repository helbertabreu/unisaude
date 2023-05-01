import "express-async-errors";
import express from "express";
import { errorHandler } from "./error";
import { patientsRouter } from "./routes/patients.router";

export const app = express();

app.use(express.json());

app.use("/patients", patientsRouter);

app.use(errorHandler);
