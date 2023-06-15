import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemister.controller';
import { AcademicSemisterValidation } from './academicSemister.validation';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemisterValidation.createAcademicSemisterZodSchema),
  AcademicSemesterController.createAcademicSemister
);

export const AcademicSemesterRoutes = router;
