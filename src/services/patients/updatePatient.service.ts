import { AppDataSource } from "../../data-source";
import Patient from "../../entities/patients.entity";
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
  console.log(patientRepository);

  const patient = await patientRepository.findOneBy({ id: patientId });

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
