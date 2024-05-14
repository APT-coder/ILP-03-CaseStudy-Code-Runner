const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'code_runner',
    password: 'rootASW',
    port: 5432
});

module.exports = pool;