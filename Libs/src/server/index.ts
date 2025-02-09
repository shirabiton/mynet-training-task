import express, { Router } from "express";

export const initApp = (
    AppRouter: Router
) => {
    const app = express();
    app.use(AppRouter);
    console.log("Starting Service...");
    app.listen(3000, () => {
        console.log("Service is running on port 3000");
    });
};