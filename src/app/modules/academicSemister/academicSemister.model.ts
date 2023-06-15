import httpStatus from 'http-status';
import { Schema, model } from 'mongoose';
import ApiError from '../../../errors/ApiErrors';
import {
  academicSemisterCode,
  academicSemisterMonth,
  academicSemisterTitles,
} from './academicSemister.constant';
import {
  AcademicSemisterModel,
  IAcademicSemister,
} from './academicSemister.interface';

const academicSemisterSchema = new Schema<IAcademicSemister>(
  {
    title: {
      type: String,
      enum: academicSemisterTitles,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      enum: academicSemisterCode,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemisterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemisterMonth,
    },
  },
  {
    timestamps: true,
  }
);

academicSemisterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemister.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic Semester is already exist!!'
    );
  }
  next();
});

export const AcademicSemister = model<IAcademicSemister, AcademicSemisterModel>(
  'AcademicSemister',
  academicSemisterSchema
);
