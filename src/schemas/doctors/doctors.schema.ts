import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IDoctorExpressRequest,
  IDoctorReturned,
  IDoctorUpdate,
} from "../../interfaces/doctors.interface";

export const doctorRequestSchema: SchemaOf<IDoctorExpressRequest> = yup
  .object()
  .shape({
    id: yup.string(),
    name: yup.string().min(3).max(64).trim().required(),
    email: yup.string().min(3).max(64).trim().required(),
    crm: yup.string().min(6).max(6).required(),
    password: yup.string().min(8).max(128).required(),
    created_at: yup.date(),
    updated_at: yup.date(),
    isActive: yup.boolean(),
  });

export const doctorReturnedSchema: SchemaOf<IDoctorReturned> = yup
  .object()
  .shape({
    id: yup.string(),
    name: yup.string().min(3).max(64).trim().required(),
    email: yup.string().min(3).max(64).trim().required(),
    crm: yup.string().min(6).max(6).required(),
    created_at: yup.date(),
    updated_at: yup.date(),
    isActive: yup.boolean(),
  });
