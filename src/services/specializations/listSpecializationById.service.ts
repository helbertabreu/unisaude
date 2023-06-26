import { AppDataSource } from "../../data-source";
import Specialization from "../../entities/specialization.entity";
import { AppError } from "../../error";

const listSpecializationByIdService = async (specializationId: string) => {
  const specialization = await AppDataSource.createQueryBuilder()
    .select("specialization")
    .from(Specialization, "specialization")
    .where("specialization.id = :id_specialization", {
      id_specialization: specializationId,
    })
    .getOne();

  if (!specialization) {
    throw new AppError(400, "Specialization not found.");
  }

  return specialization;
};

export default listSpecializationByIdService;
