require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./src/db');
const authRoutes = require('./src/routes/auth');
const apiRoutes = require('./src/routes/api');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('cors')());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/phase1', express.static(path.join(__dirname, 'phase1_data')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes);

// simple health
app.get('/health', (req,res)=> res.json({ok:true, time: new Date()}));

app.listen(PORT, async ()=>{
  try{ await db.init(); console.log('DB initialized'); }catch(e){ console.error('DB init failed', e); }
  console.log('Server listening on', PORT);
});
