const express = require('express');
const fs = require('fs'); 

const app = express();
const PORT = 3000;
app.use(express.json());


const FILE_DATABASE = './database.json';

const express = require('express');
const fs = require('fs'); 

const app = express();
const PORT = 3000;
app.use(express.json());


const FILE_DATABASE = './database.json';

app.get('/jurnal', (req, res) => {
    try {
       
        const dataTeks = fs.readFileSync(FILE_DATABASE, 'utf-8');
        
       
        const dataJurnal = JSON.parse(dataTeks);

        
        res.json({ pesan: "Berhasil mengambil data!", data: dataJurnal });
    } catch (error) {
        res.status(500).json({ pesan: "Gagal mengambil data!" });
    }
});
