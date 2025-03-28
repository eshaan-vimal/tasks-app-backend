import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
import path from 'path';


dotenv.config({path: path.resolve(__dirname, "../.env")});

export default defineConfig({
    dialect: "postgresql",
    schema: "./models/*.ts",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.DB_URL!,
        ssl: true,
    },
});