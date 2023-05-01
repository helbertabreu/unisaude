import { AppDataSource } from "../../data-source";
import Patient from "../../entities/patients.entity";

const listPatientsService = async (): Promise<Patient[]> => {
  const patientRepository = AppDataSource.getRepository(Patient);

  const patients = await patientRepository.find();

  return patients;
};

export default listPatientsService;