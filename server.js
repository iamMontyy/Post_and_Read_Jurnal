const express = require('express');
const fs = require('fs'); // 1. Memanggil Pustakawan

const app = express();
const PORT = 3000;
app.use(express.json());

// 2. Menentukan letak Buku Catatan
const FILE_DATABASE = './database.json';