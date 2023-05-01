import { AppDataSource } from "../../data-source";
import Patient from "../../entities/patients.entity";
import { AppError } from "../../error";
import {
  IPatientExpressRequest,
  IPatientReturned,
} from "../../interfaces/patients.interface";
import { patientReturnedSchema } from "../../schemas/patients/patients.schema";

const createPatientService = async (
  patientData: IPatientExpressRequest
): Promise<IPatientReturned> => {
  const { cpf, email, age } = patientData;

  const patientRepository = AppDataSource.getRepository(Patient);

  if (age < 18) {
    throw new AppError(401, "You need add a Tutor for continue.");
  }

  const patient = await patientRepository.findOneBy({ email: email, cpf: cpf });

  if (patient) {
    throw new AppError(400, "Patient is already exists");
  }

  const newPatient = patientRepository.create(patientData);

  await patientRepository.save(newPatient);

  const patientWithoutPassword = patientReturnedSchema.validate(newPatient, {
    stripUnknown: true,
  });

  return patientWithoutPassword;
};

export default createPatientService;
