export interface IDoctorExpressRequest {
  id: string;
  name: string;
  crm: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at?: Date;
  isActive: boolean;
}

export interface IDoctorReturned {
  id: string;
  name: string;
  crm: string;
  email: string;
  created_at: Date;
  updated_at?: Date;
  isActive: boolean;
}

export interface IDoctorUpdate {
  name?: string;
  crm?: string;
  email?: string;
  password?: string;
}
