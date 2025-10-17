const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db');
const { v4: uuidv4 } = require('uuid');

router.post('/login', async (req,res)=>{
  const { username, password } = req.body;
  if(!username || !password) return res.status(400).json({error:'Missing'});
  const conn = await db.pool.getConnection();
  try{
    const [rows] = await conn.query("SELECT * FROM users WHERE username = ?", [username]);
    if(!rows || rows.length===0) return res.status(401).json({error:'Invalid'});
    const user = rows[0];
    const match = await bcrypt.compare(password, user.password_hash);
    if(!match) return res.status(401).json({error:'Invalid'});
    const token = jwt.sign({ id:user.id, username:user.username, role:user.role, name:user.name }, process.env.JWT_SECRET || 'secret', { expiresIn:'8h' });
    res.json({ token, user: { id:user.id, username:user.username, role:user.role, name:user.name } });
  }finally{ conn.release(); }
});

module.exports = router;
