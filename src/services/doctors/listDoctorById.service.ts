import { AppDataSource } from "../../data-source";
import Doctor from "../../entities/doctors.entity";
import { AppError } from "../../error";

const listDoctorByIdService = async (doctorId: string) => {
  const doctor = await AppDataSource.createQueryBuilder()
    .select("doctor")
    .from(Doctor, "doctor")
    .where("doctor.id = :id_doctor", { id_doctor: doctorId })
    .getOne();

  if (!doctor) {
    throw new AppError(400, "Doctor not found.");
  }

  return doctor;
};

export default listDoctorByIdService;
