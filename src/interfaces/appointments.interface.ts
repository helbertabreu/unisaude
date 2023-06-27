export interface IAppointmentRequest {
  solicitation_date: Date;
  appointment_date: Date;
  appointment_date_type: string;
  specialization: string;
}

export interface IAppointmentResponse {
  id: string;
  solicitation_date: Date;
  appointment_date: Date;
  update_solicitation_date: Date;
  appointment_date_type: string;
  specialization: string;
}

export interface IAppointmentUpdate {
  solicitation_date?: Date;
  appointment_date?: Date;
  update_solicitation_date?: Date;
  appointment_date_type?: string;
  specialization?: string;
}
