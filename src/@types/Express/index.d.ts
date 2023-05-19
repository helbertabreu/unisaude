import { IDoctorExpressRequest } from "../../interfaces/doctors.interface";
import { IPatientExpressRequest } from "../../interfaces/patients.interface";

declare global {
  namespace Express {
    interface Request {
      patient: IPatientExpressRequest;
      doctor: IDoctorExpressRequest;
    }
  }
}
