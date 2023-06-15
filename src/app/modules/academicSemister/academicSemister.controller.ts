import { RequestHandler } from 'express';
import { AcademicSemisterServices } from './academicSemister.services';

const createAcademicSemister: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemisterServices.createSemister(
      academicSemesterData
    );
    res.status(201).json({
      success: true,
      message: 'Academic Semester created successfully!!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  createAcademicSemister,
};
