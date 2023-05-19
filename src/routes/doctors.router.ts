import { Router } from "express";
import {
  createDoctorController,
  deleteDoctorController,
  listAllDoctorsControllers,
  listDoctorByIdController,
  updateDoctorController,
} from "../controllers/doctors.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/global/ensureDataIsValid.middleware";
import { doctorRequestSchema } from "../schemas/doctors/doctors.schema";

export const doctorsRouter = Router();

doctorsRouter.post(
  "",
  ensureDataIsValidMiddleware(doctorRequestSchema),
  createDoctorController
);
doctorsRouter.get("", listAllDoctorsControllers);
doctorsRouter.get("/:id", listDoctorByIdController);
doctorsRouter.delete("/:id", deleteDoctorController);
doctorsRouter.patch("/:id", updateDoctorController);
