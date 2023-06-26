import "express-async-errors";
import express from "express";
import { errorHandler } from "./error";
import { patientsRouter } from "./routes/patients.router";
import { doctorsRouter } from "./routes/doctors.router";
import { specializationsRouter } from "./routes/specializations.router";
import { addressessRouter } from "./routes/addressess.router";

export const app = express();

app.use(express.json());

app.use("/patients", patientsRouter);
app.use("/doctors", doctorsRouter);
app.use("/specializations", specializationsRouter);
app.use("/addresses", addressessRouter);

app.use(errorHandler);
