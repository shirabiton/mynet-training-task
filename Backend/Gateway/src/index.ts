// import cookieParser from 'cookie-parser';
// import cors from "cors";
// import express from "express";
// import { createProxyMiddleware } from 'http-proxy-middleware';

// const app = express();
// const port = 3000;

// app.use(cookieParser());

// app.use(express.json());

// app.use(
//     cors({
//         origin: "http://localhost:5173",
//         methods: ["GET", "POST", "PUT", "DELETE"], // change
//         credentials: true,
//         allowedHeaders: ["Content-Type", "Authorization"],
//     })
// );

// // http://localhost:3002 = http://localhost:3002/user-service
// app.use('/user-service', createProxyMiddleware({
//     target: 'http://localhost:3002/users',
//     changeOrigin: true,
//     cookieDomainRewrite: "",
//     pathRewrite: {
//         '^/user-service': ''
//     }
// }))

// // http://localhost:3001 = http://localhost:3001/item-service
// app.use('/item-service', createProxyMiddleware({
//     target: 'http://localhost:3001/items',
//     pathRewrite: {
//         '^/item-service': ''
//     }
// }))

// app.listen(port, () => {
//     console.log(`API Gateway service is running on http://localhost:${port}`);
// });


import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const port = 3000;

app.use(cookieParser());

app.use(express.json());

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true, // חובה כדי לאפשר שליחת קוקיז
      allowedHeaders: ["Content-Type", "Authorization"], // הוספנו הרשאה לכל הכותרים הדרושים
    })
  );
  

// 🔹 פרוקסי עבור user-service
app.use(
    "/user-service",
    createProxyMiddleware({
        target: "http://localhost:3002/users", // ✅ מסלול נכון
        changeOrigin: true,
        cookieDomainRewrite: "", // ✅ כדי שהקוקיז יישארו עם הדומיין של ה-Client
        pathRewrite: {
            "^/user-service": "", // 🔹 מעביר ישירות ל- http://localhost:3002
        },
    })
);

// 🔹 פרוקסי עבור item-service
app.use(
    "/item-service",
    createProxyMiddleware({
        target: "http://localhost:3001/items", // ✅ מסלול נכון
        changeOrigin: true,
        cookieDomainRewrite: "", // ✅ חובה לקוקיז
        pathRewrite: {
            "^/item-service": "", // 🔹 מעביר ישירות ל- http://localhost:3001
        },
    })
);

app.listen(port, () => {
    console.log(`API Gateway service is running on http://localhost:${port}`);
});
