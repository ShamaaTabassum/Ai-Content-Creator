/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://accounts:KWq1D6lHeixc@ep-misty-hall-a5z0v22w.us-east-2.aws.neon.tech/Ai-Content-Creator?sslmode=require',
    }
  };