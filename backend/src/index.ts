import express from 'express';
import { MONGO_URI, PORT } from './config';
import authRoutes from './routes/auth.routes';
import mongoose from 'mongoose';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

// ------------- MIDDLEWARES -------------
app.use(express.json());

// ------------- ROUTES MIDDLEWARES -------------
app.use('/api/v1/', authRoutes);

// ------------- ERROR MIDDLEWARES -------------
app.use(errorMiddleware);

// ------------- CONNECT DB AND START SERVER -------------
mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        })
    })
