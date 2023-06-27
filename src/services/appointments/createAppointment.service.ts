import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import Appointment from "../../entities/appointments.entity";
import { IAppointmentRequest } from "../../interfaces/appointments.interface";
import { appointmentSchemaResponse } from "../../schemas/appointments/appointments.schema";

export const createAppointmentService = async (
  appointmentData: IAppointmentRequest
) => {
  const appointmentRepository = AppDataSource.getRepository(Appointment);

  const date = appointmentData.appointment_date;
  const day = date.getDay();
  const hour = date.getHours();
  const localHour = hour + 3;

  if (day === 0 || day === 6) {
    throw new AppError(400, "Invalid day");
  }

  if (localHour < 8 || localHour > 18) {
    throw new AppError(400, "Invlid hour");
  }

  const newAppointment = appointmentRepository.create(appointmentData);

  await appointmentRepository.save(newAppointment);

  return await appointmentSchemaResponse.validate(newAppointment, {
    stripUnknown: true,
  });
};
