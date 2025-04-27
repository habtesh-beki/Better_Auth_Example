import { betterAuth } from "better-auth";
import { configDotenv } from "dotenv";
import { Pool } from "pg";
configDotenv();
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    database: new Pool({
      connectionString: "postgres://user:password@localhost:5432/database",
    }),
  },
});
