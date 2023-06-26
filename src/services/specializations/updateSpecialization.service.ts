import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import Specialization from "../../entities/specialization.entity";
import { ISpecializationUpdate } from "../../interfaces/specializations.interface";

const updateSpecializationService = async (
  specializationData: ISpecializationUpdate,
  specializationId: string
) => {
  const specializationRepository = AppDataSource.getRepository(Specialization);

  const specialization = await specializationRepository.findOneBy({
    id: specializationId,
  });

  if (!specialization) {
    throw new AppError(400, "Specialization not found");
  }

  const updateSpecialization = specializationRepository.create({
    ...specialization,
    ...specializationData,
  });

  await specializationRepository.save(updateSpecialization);

  return updateSpecialization;
};

export default updateSpecializationService;
