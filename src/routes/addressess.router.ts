import { Router } from "express";
import {
  createAddressController,
  listAddressByIdController,
  listAllAddressController,
  updateAddressController,
} from "../controllers/addresses.controllers";

export const addressessRouter = Router();

addressessRouter.post("", createAddressController);
addressessRouter.get("", listAllAddressController);
addressessRouter.get("/:id", listAddressByIdController);
addressessRouter.patch("/:id", updateAddressController);
