import { drizzle } from "drizzle-orm/node-postgres";

import * as authSchema from "./auth-schema";
import * as appSchema from "./schema";

export const schema = {
  ...appSchema,
  ...authSchema,
};

export const db = drizzle(process.env.DATABASE_URL!, { schema });
