import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://beat_cancer_owner:Hz4u5wDRdnbM@ep-old-king-a56cwbvl.us-east-2.aws.neon.tech/beat_cancer?sslmode=require"
);
export const db = drizzle(sql, { schema });