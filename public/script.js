// Ambil elemen form dari DOM
const form = document.getElementById("contactForm");

// Tambahkan event listener untuk menangani submit form
form.addEventListener("submit", function (event) {
    // Mencegah form dari pengiriman default (refresh halaman)
    event.preventDefault();

    // Ambil nilai dari input form saat event submit terjadi
    let namaForm = document.getElementById("name").value;
    let emailForm = document.getElementById("email").value;
    let pesanForm = document.getElementById("pesan").value;

    // Tampilkan nilai input form di console
    console.log(`Nama: ${namaForm}, Email: ${emailForm}, Pesan: ${pesanForm}`);

    // Buat pesan yang akan dikirim ke WhatsApp
    let message = `Nama: ${namaForm}\nEmail: ${emailForm}\nPesan: ${pesanForm}`;
    let phoneNumber = "6212345678998"; // Ganti dengan nomor WhatsApp tujuan Anda
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Alihkan ke URL WhatsApp
    window.location.href = whatsappURL;

    // Tampilkan popup setelah validasi sukses
    popUp.classList.add("open-popup");

    // Reset (kosongkan) form setelah submit
    document.getElementById("contactForm").reset();
});

// Ambil elemen popup, showPop, dan closePop dari DOM
let popUp = document.getElementById("popUp");
let closePop = document.getElementById("close");

// Tambahkan event listener ke tombol tutup untuk menyembunyikan popup
closePop.addEventListener("click", function () {
    // Hapus class "open-popup" untuk menyembunyikan popup
    popUp.classList.remove("open-popup");
});
