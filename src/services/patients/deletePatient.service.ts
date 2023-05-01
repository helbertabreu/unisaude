import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import Patient from "../../entities/patients.entity";

const deletePatientService = async (patientId: string): Promise<void> => {
  const patientRepository = AppDataSource.getRepository(Patient);

  const patient = await patientRepository.findOneBy({ id: patientId });

  if (!patient) {
    throw new AppError(400, "Patient not found.");
  }

  if (!patient.isActive) {
    throw new AppError(400, "Patient is not active");
  }

  patient.isActive = false;

  await patientRepository.save(patient);
};

export default deletePatientService;
