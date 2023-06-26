import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import Address from "../../entities/addresses.entity";
import {
  IAddressess,
  IAddressUpdate,
} from "../../interfaces/addressess.interface";

const updateAddressService = async (
  addressData: IAddressess,
  addressId: string
): Promise<IAddressUpdate> => {
  const addressRepository = AppDataSource.getRepository(Address);

  const address = await addressRepository.findOneBy({ id: addressId });

  if (!address) {
    throw new AppError(400, "Address not found");
  }

  const updateAddress = addressRepository.create({
    ...address,
    ...addressData,
  });

  return updateAddress;
};

export default updateAddressService;
