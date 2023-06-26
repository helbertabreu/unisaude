export interface IAddressess {
  zip_code: string;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
}

export interface IAddressUpdate {
  zip_code?: string;
  street?: string;
  number?: number;
  complement?: string;
  district?: string;
  city?: string;
  state?: string;
}
