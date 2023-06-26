import { Request, Response } from "express";
import { ISpecializationRequest } from "../interfaces/specializations.interface";
import createSpecializationService from "../services/specializations/createSpecialization.service";
import listDoctorByIdService from "../services/doctors/listDoctorById.service";
import listAllSpecializationsService from "../services/specializations/listAllSpecializations.service";
import listSpecializationByIdService from "../services/specializations/listSpecializationById.service";
import updateSpecializationService from "../services/specializations/updateSpecialization.service";

export const createSpecializationController = async (
  req: Request,
  res: Response
) => {
  const newSpecialization: ISpecializationRequest =
    await createSpecializationService(req.body);

  return res.status(201).json(newSpecialization);
};

export const listAllSpecializationsController = async (
  req: Request,
  res: Response
) => {
  const specializations = await listAllSpecializationsService();

  return res.status(200).json(specializations);
};

export const listSpecializationById = async (req: Request, res: Response) => {
  const specializationId: string = req.params.id;
  const specialization = await listSpecializationByIdService(specializationId);

  return res.status(200).json(specialization);
};

export const updateSpecializationController = async (
  req: Request,
  res: Response
) => {
  const specializationId: string = req.params.id;
  const specializationData = req.body;
  const updateSpecialization = await updateSpecializationService(
    specializationData,
    specializationId
  );

  return res.status(200).json(updateSpecialization);
};
