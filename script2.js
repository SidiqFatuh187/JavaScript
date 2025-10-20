document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil nilai dari input
    const nama = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const usia = document.getElementById("usia").value;
    const pekerjaan = document.getElementById("pekerjaan").value;

    // Buat elemen tabel
    const tabelContainer = document.getElementById("tabelContainer");
    tabelContainer.innerHTML = `
        <h2>Data yang Dimasukkan</h2>
        <table>
            <tr>
                <th>Nama</th>
                <th>Email</th>
                <th>Usia</th>
                <th>Pekerjaan</th>
            </tr>
            <tr>
                <td>${nama}</td>
                <td>${email}</td>
                <td>${usia}</td>
                <td>${pekerjaan}</td>
            </tr>
        </table>
    `;
});