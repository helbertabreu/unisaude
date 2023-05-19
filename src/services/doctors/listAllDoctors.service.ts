import { AppDataSource } from "../../data-source";
import Doctor from "../../entities/doctors.entity";

const listAllDoctorsService = async (): Promise<Doctor[]> => {
  const doctorsRepository = AppDataSource.getRepository(Doctor);

  const doctors = await doctorsRepository.find();

  return doctors;
};

export default listAllDoctorsService;
