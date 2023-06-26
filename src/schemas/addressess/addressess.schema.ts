import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAddressess } from "../../interfaces/addressess.interface";

export const addressesSchema: SchemaOf<IAddressess> = yup.object().shape({
  id: yup.string(),
  zip_code: yup.string().max(8).required(),
  street: yup.string().max(8).required(),
  number: yup.number().required(),
  complement: yup.string().max(72).required(),
  district: yup.string().max(72).required(),
  city: yup.string().max(72).required(),
  state: yup.string().max(2).required(),
});
