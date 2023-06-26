import { AppDataSource } from "../../data-source";
import Address from "../../entities/addresses.entity";

const listAllAddressessService = async (): Promise<Address[]> => {
  const addressessRepository = AppDataSource.getRepository(Address);

  const addressess = await addressessRepository.find();

  return addressess;
};

export default listAllAddressessService;
