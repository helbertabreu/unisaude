import { AppDataSource } from "../../data-source";
import Specialization from "../../entities/specialization.entity";

const listAllSpecializationsService = async () => {
  const specializationsRepository = AppDataSource.getRepository(Specialization);

  const specializations = specializationsRepository.find();

  return await specializations;
};

export default listAllSpecializationsService;
