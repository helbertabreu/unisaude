import { AppDataSource } from "../../data-source";
import Specialization from "../../entities/specialization.entity";
import { ISpecializationRequest } from "../../interfaces/specializations.interface";

const createSpecializationService = async (
  specializationData: ISpecializationRequest
) => {
  const specialization = AppDataSource.getRepository(Specialization);

  const newSpecialization = specialization.create(specializationData);

  await specialization.save(newSpecialization);

  return newSpecialization;
};

export default createSpecializationService;
