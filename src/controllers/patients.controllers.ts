import { Request, Response } from "express";
import createPatientService from "../services/patients/createPatient.service";
import listPatientsService from "../services/patients/listPatients.service";
import deletePatientService from "../services/patients/deletePatient.service";
import updatePatientService from "../services/patients/updatePatient.service";

export const createPatientsController = async (req: Request, res: Response) => {
  const patientData = req.body;
  const newPatient = await createPatientService(patientData);

  return res.status(201).json(newPatient);
};

export const listPatientsController = async (req: Request, res: Response) => {
  console.log("aqui");
  const patients = await listPatientsService();

  return res.status(200).json(patients);
};

export const deletePatientController = async (req: Request, res: Response) => {
  const patientId = req.params.id;
  await deletePatientService(patientId);

  return res.status(204).json();
};

export const updatePatientController = async (req: Request, res: Response) => {
  const patientId: any = req.patient;
  const patientData = req.body;

  const updatedPatient = await updatePatientService(patientData, patientId);

  return res.status(200).json(updatedPatient);
};
