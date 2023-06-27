import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import Appointment from "../../entities/appointments.entity";

export const listAppointmentByIdService = async (appointmentId: string) => {
  const appointmentRepository = AppDataSource.getRepository(Appointment);

  const appointment = await appointmentRepository.findOneBy({
    id: appointmentId,
  });

  if (!appointment) {
    throw new AppError(400, "Appointment not found");
  }

  return appointment;
};
