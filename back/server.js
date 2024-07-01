const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'sql10.freemysqlhosting.net',
  user: process.env.MYSQL_USER || 'sql10716924',
  password: process.env.MYSQL_PASSWORD || 'mMPLfIiBQA',
  database: process.env.MYSQL_DATABASE || 'sql10716924'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});

app.post('/register', (req, res) => {
  const { email, nombre, codigo_de_estudiante, contraseña } = req.body;

  const query = 'INSERT INTO usuarios (email, Nombre, codigo_de_estudiante, contraseña) VALUES (?, ?, ?, ?)';
  db.query(query, [email, nombre, codigo_de_estudiante, contraseña], (err, result) => {
    if (err) {
      return res.status(500).send('Error registering user');
    }
    res.status(201).send('User registered successfully');
  });
});

app.post('/login', (req, res) => {
  const { codigo_de_estudiante, contraseña } = req.body;

  const query = 'SELECT * FROM usuarios WHERE codigo_de_estudiante = ? AND contraseña = ?';
  db.query(query, [codigo_de_estudiante, contraseña], (err, results) => {
    if (err) {
      return res.status(500).send('Error during login');
    }

    if (results.length > 0) {
      res.status(200).json({
        message: 'Login successful',
        user: results[0]
      });
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://192.168.0.103:${port}`);
});