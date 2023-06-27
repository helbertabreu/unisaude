import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/global/ensureDataIsValid.middleware";
import { appointmentSchemaRequest } from "../schemas/appointments/appointments.schema";
import {
  createAppointmentController,
  deleteAppointmentController,
  listAppointmentByIdController,
  listAppointmentsController,
  updateAppointmentController,
} from "../controllers/appointments.controllers";

export const appointmentsRouter = Router();

appointmentsRouter.post(
  "",
  ensureDataIsValidMiddleware(appointmentSchemaRequest),
  createAppointmentController
);
appointmentsRouter.get("", listAppointmentsController);
appointmentsRouter.get("/:id", listAppointmentByIdController);
appointmentsRouter.delete("/:id", deleteAppointmentController);
appointmentsRouter.patch("/:id", updateAppointmentController);
