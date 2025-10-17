const mysql = require('mysql2/promise');
require('dotenv').config();
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || 'labuser',
  password: process.env.MYSQL_PASSWORD || 'labpass',
  database: process.env.MYSQL_DATABASE || 'alphamed',
  waitForConnections: true,
  connectionLimit: 10
});

async function init(){
  const conn = await pool.getConnection();
  try{
    // create tables if they don't exist
    await conn.query(`CREATE TABLE IF NOT EXISTS users (
      id VARCHAR(48) PRIMARY KEY, username VARCHAR(100) UNIQUE, password_hash TEXT, role VARCHAR(30), name VARCHAR(200)
    )`);
    await conn.query(`CREATE TABLE IF NOT EXISTS departments (
      id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(200)
    )`);
    await conn.query(`CREATE TABLE IF NOT EXISTS tests (
      id INT PRIMARY KEY, department_id INT, test_name VARCHAR(300), unit VARCHAR(50), min_value DOUBLE, max_value DOUBLE, normal_range_adult VARCHAR(100), normal_range_female VARCHAR(100), normal_range_child VARCHAR(100), remarks TEXT
    )`);
    await conn.query(`CREATE TABLE IF NOT EXISTS patients (
      id INT PRIMARY KEY AUTO_INCREMENT, patient_code VARCHAR(80), full_name VARCHAR(200), dob DATE, gender VARCHAR(20), age INT, mobile VARCHAR(50), address TEXT, referred_by INT, sample_type VARCHAR(80), sample_status VARCHAR(50), collected_at DATETIME, technician_id INT, department VARCHAR(200), remarks TEXT, attachment VARCHAR(255), created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    await conn.query(`CREATE TABLE IF NOT EXISTS reports (
      id INT PRIMARY KEY AUTO_INCREMENT, report_id VARCHAR(80), patient_id INT, created_by VARCHAR(100), date_created DATETIME, data LONGTEXT
    )`);
    // seed default admin if not exists
    const [rows] = await conn.query("SELECT COUNT(*) as c FROM users");
    if(rows && rows[0] && rows[0].c === 0){
      const bcrypt = require('bcrypt');
      const { v4: uuidv4 } = require('uuid');
      const p = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'Admin@123', 10);
      await conn.query("INSERT INTO users (id,username,password_hash,role,name) VALUES (?,?,?,?,?)", [uuidv4(),'admin@alphamed.com',p,'admin','Administrator']);
      await conn.query("INSERT INTO users (id,username,password_hash,role,name) VALUES (?,?,?,?,?)", [uuidv4(),'dr@alphamed.com',bcrypt.hashSync('Doctor@123',10),'doctor','Doctor']);
      await conn.query("INSERT INTO users (id,username,password_hash,role,name) VALUES (?,?,?,?,?)", [uuidv4(),'tech@alphamed.com',bcrypt.hashSync('Tech@123',10),'technician','Technician']);
      await conn.query("INSERT INTO users (id,username,password_hash,role,name) VALUES (?,?,?,?,?)", [uuidv4(),'reception@alphamed.com',bcrypt.hashSync('Reception@123',10),'reception','Reception']);
    }
  }finally{ conn.release(); }
}

module.exports = { pool, init };
