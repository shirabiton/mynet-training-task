import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { initApp } from "./../../../Libs/src/server/index";
import GatewayRouter from "./gateway/gateway.router";

const port = 3000;
const app = express();

initApp(port, app, GatewayRouter);

const setupProxy = () => {
  app.use(
    "/user-service",
    createProxyMiddleware({
      target: "http://localhost:3002",
      changeOrigin: true,
      cookieDomainRewrite: "",
      pathRewrite: {
        "^/user-service": "",
      },
    })
  );

  app.use(
    "/item-service",
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
      cookieDomainRewrite: "",
      pathRewrite: {
        "^/item-service": "",
      },
    })
  );
};

setupProxy();
