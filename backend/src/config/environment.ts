import dotenv from "dotenv";

dotenv.config();

interface Environment {
  mongoURI: string;
  corsOrigin: string;
  sessionSecret: string;
}

const env: Environment = {
  mongoURI: process.env.MONGO_URI || "",
  corsOrigin: process.env.CORS_ORIGIN || "",
  sessionSecret: process.env.SESSION_SECRET || "",
};

export default env;
