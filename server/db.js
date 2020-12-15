const { Pool } = require('pg');

const pool = new Pool({
    user: 'die_user',
    host: 'localhost',
    database: 'die_db',
    password: '1234',
    port: 5432
});

module.exports = pool;