function hitungLuas() {
    // Mengambil nilai alas dan tinggi dari input
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    // Memeriksa apakah nilai yang dimasukkan adalah angka
    if (!isNaN(alas) && !isNaN(tinggi)) {
        // Menghitung luas segitiga
        const luas = 0.5 * alas * tinggi;
        
        // Menampilkan hasil perhitungan
        tampilkanHasil(`Luas Segitiga: ${luas.toFixed(2)}`);
    } else {
        // Menampilkan pesan kesalahan jika input tidak valid
        tampilkanHasil('Masukkan angka yang valid untuk alas dan tinggi.');
    }
}

function resetForm() {
    // Mengosongkan nilai pada input dan hasil
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    tampilkanHasil(''); // Menyembunyikan hasil ketika tombol reset diklik
}

function tampilkanHasil(hasil) {
    // Menampilkan hasil perhitungan pada elemen dengan id "luas-hasil"
    document.getElementById('luas-hasil').textContent = hasil;
}
