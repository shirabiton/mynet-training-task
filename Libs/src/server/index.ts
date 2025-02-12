import cookieParser from "cookie-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Router } from "express";

export const initApp = (AppRouter: Router, port: number) => {
    dotenv.config();
    const app = express();

    app.use(express.json());

    app.use(express.urlencoded({ extended: true })); //????

    app.use(cookieParser());

    app.use(cors({
        origin: 'http://localhost:5173',
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }));

    app.use(AppRouter);

    app.listen(port, () => {
        console.log(`Service is running on http://localhost:${port}`);
    });
};

// import express, { Router } from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";

// export const initApp = (AppRouter: Router, port: number) => {
//     dotenv.config(); // קודם כל, לטעון משתנים

//     const app = express();


//     app.use(cookieParser()); // חובה לפני שה-CORS יופעל

//     app.use(cors({
//         origin: "http://localhost:5173",
//         credentials: true
//     }));

//     app.use(AppRouter);

//     app.listen(port, () => {
//         console.log(`Service is running on http://localhost:${port}`);
//     });
// };
