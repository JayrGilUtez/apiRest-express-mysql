import { createPool } from "mysql2/promise";
import {HOST, DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT} from './config.js'

export const pool = createPool({
    
    host: HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database:DB_DATABASE
});