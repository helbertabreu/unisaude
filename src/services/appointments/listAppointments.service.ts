import { AppDataSource } from "../../data-source";
import Appointment from "../../entities/appointments.entity";

export const listAppointmentService = async () => {
  const appointmentRepository = AppDataSource.getRepository(Appointment);

  const appointments = await appointmentRepository.find();

  return appointments;
};
