import { AppDataSource } from "../../data-source";
import Patient from "../../entities/patients.entity";
import { AppError } from "../../error";

const listPatientByIdService = async (patientId: string) => {
  const patient = await AppDataSource.createQueryBuilder()
    .select("patient")
    .from(Patient, "patient")
    .where("patient.id = :id_patient", { id_patient: patientId })
    .getOne();

  if (!patient) {
    throw new AppError(400, "Patient not found.");
  }

  return patient;
};

export default listPatientByIdService;
