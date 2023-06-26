import { Request, Response } from "express";
import createAddressService from "../services/adressess/createAddressess.service";
import listAllAddressessService from "../services/adressess/listAllAddressess.service";
import listAddressByIdService from "../services/adressess/listAddressById.service";
import updateAddressService from "../services/adressess/updateAddress.service";

export const createAddressController = async (req: Request, res: Response) => {
  const addressData = req.body;
  const newAddress = await createAddressService(addressData);

  return res.status(201).json(newAddress);
};

export const listAllAddressController = async (req: Request, res: Response) => {
  const addressess = await listAllAddressessService();

  return res.status(200).json(addressess);
};

export const listAddressByIdController = async (
  req: Request,
  res: Response
) => {
  const addressId: string = req.params.id;
  const address = await listAddressByIdService(addressId);

  return res.json(address);
};

export const updateAddressController = async (req: Request, res: Response) => {
  const addressId: string = req.params.id;
  const addressData = req.body;
  const updateAddress = await updateAddressService(addressData, addressId);

  return res.status(200).json(updateAddress);
};
