import { AppDataSource } from "../../data-source";
import Doctor from "../../entities/doctors.entity";
import { AppError } from "../../error";

const deleteDoctorService = async (doctorId: string): Promise<void> => {
  const doctorRepository = AppDataSource.getRepository(Doctor);

  const doctor = await doctorRepository.findOneBy({ id: doctorId });

  if (!doctor) {
    throw new AppError(400, "Doctor not found.");
  }

  if (!doctor.isActive) {
    throw new AppError(400, "Doctor is not active");
  }

  doctor.isActive = false;

  await doctorRepository.save(doctor);
};

export default deleteDoctorService;
