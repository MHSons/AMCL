const fs = require('fs');
const path = require('path');
const db = require('../src/db');

(async ()=>{
  try{
    await db.init();
    const sqlPath = path.join(__dirname, '..', 'phase1_data', 'lab_departments_tests.sql');
    if(fs.existsSync(sqlPath)){
      const mysql = require('mysql2/promise');
      const env = require('dotenv').config().parsed || process.env;
      const conn = await mysql.createConnection({host: env.MYSQL_HOST||'localhost', user: env.MYSQL_USER||'labuser', password: env.MYSQL_PASSWORD||'labpass', database: env.MYSQL_DATABASE||'alphamed'});
      const sql = fs.readFileSync(sqlPath,'utf-8');
      console.log('Importing phase1 SQL...');
      await conn.query(sql);
      await conn.end();
      console.log('Phase1 SQL imported.');
    } else console.log('phase1 SQL not found, skipping import.');
    process.exit(0);
  }catch(e){ console.error(e); process.exit(1); }
})();
