import pkg from 'pg';
import config from './readConfig.js';

const { Pool } = pkg;

const ENV = process.env.ENV || 'dev';
const dbConfig = config.database[ENV === 'prd' ? 'production' : 'development'];
console.log("env:", ENV);
console.log("schema:", dbConfig.schema);

// DB接続プール
const pool = new Pool({
  user: dbConfig.user,
  host: dbConfig.host,
  database: dbConfig.database,
  password: dbConfig.password,
  port: dbConfig.port,
  schema: dbConfig.schema
});

export default pool;