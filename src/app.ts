import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { AcademicSemesterRoutes } from './app/modules/academicSemister/academicSemister.route';
import { UserRoutes } from './app/modules/users/user.route';
// import ApiError from './errors/ApiErrors'

const app: Application = express();

// use
app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing error logger')
//   // next('internal server error')
//   // res.send('Hello World!')
// })

app.use(globalErrorHandler);

export default app;
