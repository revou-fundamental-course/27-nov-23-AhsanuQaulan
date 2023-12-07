function hitungKeliling() {
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        const keliling = sisi1 + sisi2 + sisi3;
        tampilkanHasil(`Keliling Segitiga: ${keliling.toFixed(2)}`);
        document.getElementById('hasil').style.display = 'block';
    } else {
        tampilkanHasil('Masukkan angka yang valid untuk sisi 1, sisi 2, dan sisi 3.');
    }
}

function resetForm() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('hasil').style.display = 'none';
}

function tampilkanHasil(hasil) {
    document.getElementById('keliling-hasil').textContent = hasil;
}
