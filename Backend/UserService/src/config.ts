import dotenv from "dotenv";

dotenv.config();

const { PORT = 3002 } = process.env;
const config: {
  PORT: number;
  SECRET_KEY: string | undefined;
  TOKEN_EXPIRATION_HOURS: number;
} = {
  PORT: Number(PORT),
  SECRET_KEY: process.env.JWT_SECRET_KEY,
  TOKEN_EXPIRATION_HOURS: 1,
};

export default config;
