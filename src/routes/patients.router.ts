import { Router } from "express";
import {
  createPatientsController,
  deletePatientController,
  listPatientByIdController,
  listPatientsController,
  updatePatientController,
} from "../controllers/patients.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/global/ensureDataIsValid.middleware";
import { patientRequestSchema } from "../schemas/patients/patients.schema";

export const patientsRouter = Router();

patientsRouter.post(
  "",
  ensureDataIsValidMiddleware(patientRequestSchema),
  createPatientsController
);
patientsRouter.get("", listPatientsController);
patientsRouter.get("/:id", listPatientByIdController);
patientsRouter.delete("/:id", deletePatientController);
patientsRouter.patch("/:id", updatePatientController);
