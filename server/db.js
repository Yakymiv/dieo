const { Pool } = require('pg');

const pool = new Pool({
    user: 'Yaroslav',
    host: 'localhost',
    database: 'die_db',
    password: 'Rr412762',
    port: 5432
});

module.exports = pool;