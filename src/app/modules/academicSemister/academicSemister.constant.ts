import {
  IAcademicSemisterCode,
  IAcademicSemisterTitle,
  Month,
} from './academicSemister.interface';

export const academicSemisterTitles: IAcademicSemisterTitle[] = [
  'Autumn',
  'Summer',
  'Fall',
];

export const academicSemisterCode: IAcademicSemisterCode[] = ['01', '02', '03'];

export const academicSemisterMonth: Month[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
