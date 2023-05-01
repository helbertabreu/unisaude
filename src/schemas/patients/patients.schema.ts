import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IPatientExpressRequest,
  IPatientReturned,
} from "../../interfaces/patients.interface";

export const patientRequestSchema: SchemaOf<IPatientExpressRequest> = yup
  .object()
  .shape({
    id: yup.string(),
    created_at: yup.date(),
    updated_at: yup.date(),
    name: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().required(),
    age: yup.number().required(),
    phone: yup.string().required(),
    genre: yup.string().required(),
    mother: yup.string().required(),
    father: yup.string().required(),
    blood_type: yup.string().notRequired(),
    password: yup.string().required(),
    isActive: yup.boolean(),
  });

export const patientReturnedSchema: SchemaOf<IPatientReturned> = yup
  .object()
  .shape({
    id: yup.string(),
    created_at: yup.date(),
    updated_at: yup.date(),
    name: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().required(),
    age: yup.number().required(),
    phone: yup.string().required(),
    genre: yup.string().required(),
    mother: yup.string().required(),
    father: yup.string().required(),
    blood_type: yup.string().notRequired(),
    isActive: yup.boolean(),
  });
