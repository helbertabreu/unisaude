import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import Appointment from "../../entities/appointments.entity";
import { IAppointmentUpdate } from "../../interfaces/appointments.interface";

export const updateAppointmentService = async (
  appointmentData: IAppointmentUpdate,
  appointmentId: string
) => {
  const appointmentRepository = AppDataSource.getRepository(Appointment);

  const appointment = await appointmentRepository.findOneBy({
    id: appointmentId,
  });

  if (!appointment) {
    throw new AppError(400, "Appointment not found");
  }

  const updatedAppointment = appointmentRepository.create({
    ...appointment,
    ...appointmentData,
  });
};
