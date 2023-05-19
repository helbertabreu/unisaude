import { AppDataSource } from "../../data-source";
import Doctor from "../../entities/doctors.entity";
import { AppError } from "../../error";
import { IDoctorUpdate } from "../../interfaces/doctors.interface";
import { doctorReturnedSchema } from "../../schemas/doctors/doctors.schema";

const updateDoctorService = async (
  doctorData: IDoctorUpdate,
  doctorId: string
) => {
  const doctorRepository = AppDataSource.getRepository(Doctor);

  const doctor = await doctorRepository.findOneBy({
    id: doctorId,
  });

  if (!doctor) {
    throw new AppError(400, "Doctor not found.");
  }

  const updatedDoctor = doctorRepository.create({
    ...doctor,
    ...doctorData,
  });

  await doctorRepository.save(updatedDoctor);

  const doctorWithoutPassword = doctorReturnedSchema.validate(updatedDoctor, {
    stripUnknown: true,
  });

  return doctorWithoutPassword;
};

export default updateDoctorService;
