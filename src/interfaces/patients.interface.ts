export interface IPatientExpressRequest {
  id: string;
  created_at: Date;
  updated_at?: Date;
  name: string;
  cpf: string;
  email: string;
  age: number;
  phone: string;
  genre: string;
  mother: string;
  father?: string;
  blood_type?: string;
  password: string;
  isActive: boolean;
}

export interface IPatientReturned {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  cpf: string;
  email: string;
  age: number;
  phone: string;
  genre: string;
  mother: string;
  father?: string;
  blood_type?: string;
  isActive: boolean;
}

export interface IPatientUpdate {
  name?: string;
  cpf?: string;
  age?: number;
  email?: string;
  password?: string;
  genre?: string;
  phone?: string;
  father?: string;
  mother?: string;
  blood_type?: string;
}
