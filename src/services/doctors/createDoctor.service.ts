import { AppDataSource } from "../../data-source";
import Doctor from "../../entities/doctors.entity";
import { AppError } from "../../error";
import {
  IDoctorExpressRequest,
  IDoctorReturned,
} from "../../interfaces/doctors.interface";
import { doctorReturnedSchema } from "../../schemas/doctors/doctors.schema";

const createDoctorService = async (
  doctorData: IDoctorExpressRequest
): Promise<IDoctorReturned> => {
  const doctorRepository = AppDataSource.getRepository(Doctor);

  const crm: boolean = await doctorRepository.exist({
    where: { crm: doctorData.crm },
  });

  const email: boolean = await doctorRepository.exist({
    where: { email: doctorData.email },
  });

  if (crm) {
    throw new AppError(409, "Crm is already registered.");
  }

  if (email) {
    throw new AppError(409, "Email is already registered.");
  }

  const newDoctor: Doctor = doctorRepository.create(doctorData);

  await doctorRepository.save(newDoctor);

  const doctorWithoutPassword = doctorReturnedSchema.validate(newDoctor, {
    stripUnknown: true,
  });

  return doctorWithoutPassword;
};

export default createDoctorService;
