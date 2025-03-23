document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form submit default

    // Ambil nilai input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validasi sederhana
    if (name && email && phone && message) {
        // Format pesan untuk WhatsApp
        const whatsappMessage = `Halo KitaNet.id Saya ingin Berlanggan Wi-Fi dengan format berikut ${name}.\nEmail ${email}\nNomor Telepon: ${phone}\nPesan: ${message}`;

        // Encode pesan untuk URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Nomor WhatsApp Anda (ganti dengan nomor Anda)
        const whatsappNumber = "6285788804690"; // Contoh: 6281234567890

        // Redirect ke WhatsApp
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    } else {
        document.getElementById('responseMessage').textContent = "Harap isi semua field!";
    }
});
