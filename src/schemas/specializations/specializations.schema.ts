import * as yup from "yup";
import { SchemaOf } from "yup";
import { ISpecializationRequest } from "../../interfaces/specializations.interface";

export const specializationRequestSchema: SchemaOf<ISpecializationRequest> = yup
  .object()
  .shape({
    name: yup.string().min(6).max(120).trim().required(),
  });
