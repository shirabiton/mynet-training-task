import cors from 'cors';
import dotenv from 'dotenv';
import express, { Router } from "express";

export const initApp = (
    AppRouter: Router
) => {
    const port = process.env.PORT || 3000;
    const app = express();
    dotenv.config();

    app.use(cors({
        origin: 'http://localhost:5173',
        methods: ['GET'],
        credentials: true
    }));

    app.use(AppRouter);

    app.listen(port, () => {
        console.log(`Service is running on http://localhost:${port}`);
    });
};