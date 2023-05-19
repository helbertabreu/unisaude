import { AppDataSource } from "../../data-source";
import Patient from "../../entities/patients.entity";
import { AppError } from "../../error";
import {
  IPatientExpressRequest,
  IPatientReturned,
  IPatientUpdate,
} from "../../interfaces/patients.interface";
import { patientReturnedSchema } from "../../schemas/patients/patients.schema";

const updatePatientService = async (
  patientData: IPatientUpdate,
  patientId: string
): Promise<IPatientUpdate> => {
  const patientRepository = AppDataSource.getRepository(Patient);

  const patient = await patientRepository.findOneBy({ id: patientId });

  if (!patient) {
    throw new AppError(400, "Patient not found.");
  }

  const updatedPatient = patientRepository.create({
    ...patient,
    ...patientData,
  });

  await patientRepository.save(updatedPatient);

  const patientWithoutPassword = patientReturnedSchema.validate(
    updatedPatient,
    {
      stripUnknown: true,
    }
  );

  return patientWithoutPassword;
};

export default updatePatientService;
