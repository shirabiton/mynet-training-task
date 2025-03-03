import dotenv from "dotenv";

dotenv.config();

const { PORT = 3002, JWT_SECRET_KEY } = process.env;

const config = {
  PORT: Number(PORT),
  SECRET_KEY: String(JWT_SECRET_KEY),
  TOKEN_EXPIRATION_HOURS: 1,
};

export default config;
