import { Request, Response } from "express";
import { createAppointmentService } from "../services/appointments/createAppointment.service";
import { listAppointmentService } from "../services/appointments/listAppointments.service";
import { listAppointmentByIdService } from "../services/appointments/listAppointmentById.service";
import { deleteAppointmentService } from "../services/appointments/deleteAppointment.service";
import { updateAppointmentService } from "../services/appointments/updateAppointment.service";

export const createAppointmentController = async (
  req: Request,
  res: Response
) => {
  const appointmentData = req.body;
  const newAppointment = await createAppointmentService(appointmentData);

  return res.status(201).json(newAppointment);
};

export const listAppointmentsController = async (
  req: Request,
  res: Response
) => {
  const appointments = await listAppointmentService();

  return res.status(200).json(appointments);
};

export const listAppointmentByIdController = async (
  req: Request,
  res: Response
) => {
  const appointmentId: string = req.params.id;
  const appointment = await listAppointmentByIdService(appointmentId);

  return res.json(appointment);
};

export const deleteAppointmentController = async (
  req: Request,
  res: Response
) => {
  const appointmentId: string = req.params.id;
  await deleteAppointmentService(appointmentId);

  return res.status(204).json();
};

export const updateAppointmentController = async (
  req: Request,
  res: Response
) => {
  const appointmentId: string = req.params.id;
  const appointmentData = req.body;
  const updatedAppointment = await updateAppointmentService(
    appointmentData,
    appointmentId
  );

  return res.status(200).json(updatedAppointment);
};
