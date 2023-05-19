import { Request, Response } from "express";
import createDoctorService from "../services/doctors/createDoctor.service";
import listAllDoctorsService from "../services/doctors/listAllDoctors.service";
import listDoctorByIdService from "../services/doctors/listDoctorById.service";
import deleteDoctorService from "../services/doctors/deleteDoctor.service";
import updateDoctorService from "../services/doctors/updateDoctor.service";

export const createDoctorController = async (req: Request, res: Response) => {
  const newDoctor = await createDoctorService(req.body);
  return res.status(201).json(newDoctor);
};

export const listAllDoctorsControllers = async (
  req: Request,
  res: Response
) => {
  const doctors = await listAllDoctorsService();

  return res.json(doctors);
};

export const listDoctorByIdController = async (req: Request, res: Response) => {
  const doctorId: string = req.params.id;
  const doctor = await listDoctorByIdService(doctorId);

  return res.json(doctor);
};

export const deleteDoctorController = async (req: Request, res: Response) => {
  const doctorId = req.params.id;
  await deleteDoctorService(doctorId);

  return res.status(204).json();
};

export const updateDoctorController = async (req: Request, res: Response) => {
  const doctorId: string = req.params.id;
  const doctorData = req.body;

  const updatedDoctor = await updateDoctorService(doctorData, doctorId);

  return res.status(200).json(updatedDoctor);
};
