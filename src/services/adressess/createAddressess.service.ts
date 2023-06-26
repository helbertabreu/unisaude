import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import Address from "../../entities/addresses.entity";
import { IAddressess } from "../../interfaces/addressess.interface";

const createAddressService = async (
  addressData: IAddressess
): Promise<IAddressess> => {
  const addressRepository = AppDataSource.getRepository(Address);

  const newAddress = addressRepository.create(addressData);

  await addressRepository.save(newAddress);

  return newAddress;
};

export default createAddressService;
