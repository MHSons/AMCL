const express = require('express');
const router = express.Router();
const db = require('../db');
const jwt = require('jsonwebtoken');

async function authMiddleware(req,res,next){
  const auth = req.headers.authorization;
  if(!auth) return res.status(401).json({error:'Missing token'});
  const token = auth.split(' ')[1];
  try{ const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret'); req.user = payload; next(); }catch(e){ return res.status(401).json({error:'Invalid token'}); }
}

// Departments
router.get('/departments', authMiddleware, async (req,res)=>{
  const conn = await db.pool.getConnection();
  try{
    const [rows] = await conn.query("SELECT * FROM departments ORDER BY name");
    res.json(rows);
  }finally{ conn.release(); }
});

// Tests by department
router.get('/departments/:id/tests', authMiddleware, async (req,res)=>{
  const conn = await db.pool.getConnection();
  try{
    const [rows] = await conn.query("SELECT * FROM tests WHERE department_id = ? ORDER BY test_name", [req.params.id]);
    res.json(rows);
  }finally{ conn.release(); }
});

// Search tests (by name)
router.get('/tests/search', authMiddleware, async (req,res)=>{
  const q = req.query.q || '';
  const conn = await db.pool.getConnection();
  try{
    const [rows] = await conn.query("SELECT * FROM tests WHERE test_name LIKE ? LIMIT 200", ['%'+q+'%']);
    res.json(rows);
  }finally{ conn.release(); }
});

// Add patient (reception)
router.post('/patients', authMiddleware, async (req,res)=>{
  const data = req.body;
  const conn = await db.pool.getConnection();
  try{
    const [r] = await conn.query("INSERT INTO patients (patient_code, full_name, dob, gender, age, mobile, address, referred_by, sample_type, sample_status, collected_at, technician_id, department, remarks) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [data.patient_code, data.full_name, data.dob, data.gender, data.age, data.mobile, data.address, data.referred_by, data.sample_type, data.sample_status || 'Pending', data.collected_at, data.technician_id, data.department, data.remarks]);
    res.json({ ok:true, insertId: r.insertId });
  }finally{ conn.release(); }
});

// Create report (technician) - simplified: store report JSON and create PDF endpoint elsewhere
router.post('/reports', authMiddleware, async (req,res)=>{
  const data = req.body;
  const conn = await db.pool.getConnection();
  try{
    const reportId = 'R'+Date.now();
    await conn.query("INSERT INTO reports (report_id, patient_id, created_by, date_created, data) VALUES (?,?,?,?,?)", [reportId, data.patient_id, req.user.username, new Date(), JSON.stringify(data)]);
    res.json({ ok:true, reportId });
  }finally{ conn.release(); }
});

module.exports = router;
