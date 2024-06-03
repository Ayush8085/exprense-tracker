import express from 'express';
import { MONGO_URI, PORT } from './config';
import authRoutes from './routes/auth.routes';
import expenseRoutes from './routes/expense.routes';
import mongoose from 'mongoose';
import errorMiddleware from './middlewares/error.middleware';
import cookieParser from 'cookie-parser';
import authMiddleware from './middlewares/auth.middleware';

const app = express();

// ------------- MIDDLEWARES -------------
app.use(express.json());
app.use(cookieParser());

// ------------- ROUTES MIDDLEWARES -------------
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/expense', authMiddleware, expenseRoutes);

// ------------- ERROR MIDDLEWARES -------------
app.use(errorMiddleware);

// ------------- CONNECT DB AND START SERVER -------------
mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        })
    })
