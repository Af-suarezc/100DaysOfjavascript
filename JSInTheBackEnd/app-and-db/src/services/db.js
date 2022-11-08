//Connecting the database to our project
import config from '../config.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mysql = require('mysql2');
const configL = config;
async function query(sql, params){
    const connection = await mysql.createConnection(configL.db);
    const [results, ]= await connection.execute(sql, params);
    return results
}

export default {query}