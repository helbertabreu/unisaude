import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IAppointmentRequest,
  IAppointmentResponse,
} from "../../interfaces/appointments.interface";

export const appointmentSchemaRequest: SchemaOf<IAppointmentRequest> = yup
  .object()
  .shape({
    solicitation_date: yup.date().required(),
    appointment_date: yup.date().required(),
    appointment_date_type: yup.string().required(),
    specialization: yup.string().required(),
  });

export const appointmentSchemaResponse: SchemaOf<IAppointmentResponse> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    solicitation_date: yup.date(),
    appointment_date: yup.date(),
    appointment_date_type: yup.string(),
    update_solicitation_date: yup.date(),
    specialization: yup.string(),
  });
