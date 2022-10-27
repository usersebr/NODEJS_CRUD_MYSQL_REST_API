import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DBHOST = process.env.DBHOST || "localhost";
export const DB_DATABASE = process.env.DB_DATABASE || "companydb";
export const DB_PORT = process.env.DB_PORT || 3306;

// console.log(process.env.PORT)
// console.log(process.env.DBHOST)
// console.log(process.env.DB_PORT)
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSWORD)
// console.log(process.env.DB_DATABASE)
