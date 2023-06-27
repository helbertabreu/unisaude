import { Router } from "express";
import {
  createAddressController,
  listAddressByIdController,
  listAllAddressController,
  updateAddressController,
} from "../controllers/addresses.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/global/ensureDataIsValid.middleware";
import { addressesSchema } from "../schemas/addressess/addressess.schema";

export const addressessRouter = Router();

addressessRouter.post(
  "",
  ensureDataIsValidMiddleware(addressesSchema),
  createAddressController
);
addressessRouter.get("", listAllAddressController);
addressessRouter.get("/:id", listAddressByIdController);
addressessRouter.patch("/:id", updateAddressController);
