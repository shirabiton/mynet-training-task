import { Router } from "express";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";

const GatewayRouter = Router();

GatewayRouter.use(
  "/user-service",
  createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true,
    cookieDomainRewrite: "",
    pathRewrite: {
      "^/user-service": "",
    },
    on: {
      proxyReq: fixRequestBody,
    },
  })
);

GatewayRouter.use(
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

export default GatewayRouter;
