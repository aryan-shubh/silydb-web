import { betterAuth } from "better-auth";
import { Pool } from "pg";

const database = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

export const auth = betterAuth({
  database,
  baseURL: process.env.BETTER_AUTH_URL!,
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
