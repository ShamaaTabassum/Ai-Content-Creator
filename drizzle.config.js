/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Ai-Content-Creator_owner:rD40gacROtnh@ep-autumn-union-a523vdu5.us-east-2.aws.neon.tech/Ai-Content-Creator?sslmode=require',
    }
  };