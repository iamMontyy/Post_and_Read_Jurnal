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

        
        res.json({ pesan: "Berhasil mengambil data! jurnal", data: dataJurnal });
    } catch (error) {
        res.status(500).json({ pesan: "Gagal mengambil data jurnal!" });
    }
});

app.post('/jurnal', (req, res) => {
    try {
        const { judul, isi } = req.body;

        
        const dataTeks = fs.readFileSync(FILE_DATABASE, 'utf-8');
        const dataJurnal = JSON.parse(dataTeks);

        
        const jurnalBaru = {
            id: Date.now(), 
            tanggal: new Date().toLocaleDateString('id-ID'),
            judul: judul,
            isi: isi
        };

        
        dataJurnal.push(jurnalBaru);

    
        fs.writeFileSync(FILE_DATABASE, JSON.stringify(dataJurnal, null, 2));

        res.status(201).json({ pesan: "Jurnal berhasil disimpan permanen!", data: jurnalBaru });
    } catch (error) {
        res.status(500).json({ pesan: "Gagal menyimpan jurnal." });
    }
});

app.listen(PORT, () => {
    console.log(`Server Jurnal berjalan di http://localhost:${PORT}`);
});
