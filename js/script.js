function tampilkanLuas() {
    document.getElementById('luas-form').style.display = 'block';
    document.getElementById('keliling-form').style.display = 'none';
    resetForm();
}

function tampilkanKeliling() {
    document.getElementById('keliling-form').style.display = 'block';
    document.getElementById('luas-form').style.display = 'none';
    resetForm();
}

function hitung() {
    const luasForm = document.getElementById('luas-form').style.display === 'block';

    if (luasForm) {
        hitungLuas();
    } else {
        hitungKeliling();
    }
}

function hitungLuas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (!isNaN(alas) && !isNaN(tinggi)) {
        const luas = 0.5 * alas * tinggi;
        tampilkanHasil(`Luas Segitiga: ${luas.toFixed(2)}`);
    } else {
        tampilkanHasil('Masukkan angka yang valid untuk alas dan tinggi.');
    }
}

function hitungKeliling() {
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        const keliling = sisi1 + sisi2 + sisi3;
        tampilkanHasil(`Keliling Segitiga: ${keliling.toFixed(2)}`);
    } else {
        tampilkanHasil('Masukkan angka yang valid untuk sisi 1, sisi 2, dan sisi 3.');
    }
}

function reset() {
    resetForm();
}

function resetForm() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    tampilkanHasil('');
    document.getElementById('hasil').style.display = 'none';
}

function tampilkanHasil(hasil) {
    document.getElementById('hasil-text').textContent = hasil;
    document.getElementById('hasil').style.display = 'block';
}
