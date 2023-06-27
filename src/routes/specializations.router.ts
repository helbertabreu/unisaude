import { Router } from "express";
import {
  createSpecializationController,
  listAllSpecializationsController,
  listSpecializationById,
  updateSpecializationController,
} from "../controllers/specializations.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/global/ensureDataIsValid.middleware";
import { specializationRequestSchema } from "../schemas/specializations/specializations.schema";

export const specializationsRouter = Router();

specializationsRouter.post(
  "",
  ensureDataIsValidMiddleware(specializationRequestSchema),
  createSpecializationController
);
specializationsRouter.get(
  "",
  ensureDataIsValidMiddleware(specializationRequestSchema),
  listAllSpecializationsController
);
specializationsRouter.get("/:id", listSpecializationById);
specializationsRouter.patch("/:id", updateSpecializationController);
