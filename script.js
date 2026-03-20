console.log("SCRIPT JALAN")
import { db, collection, addDoc, getDocs, query, orderBy } from "./firebase.js";

///////////////////////////////
// MASUK DARI WELCOME
///////////////////////////////
window.masuk = function () {

  const welcome = document.getElementById("welcomeText");
  const menu = document.getElementById("menu");
  const navbar = document.getElementById("navbar");

  if (welcome) welcome.classList.add("hidden");
  if (menu) menu.classList.remove("hidden");
  if (navbar) navbar.classList.remove("hidden");

};

///////////////////////////////
// PINDAH SECTION
///////////////////////////////
window.showSection = function (id) {

  // sembunyikan semua section
  document.querySelectorAll(".content-section").forEach(section => {
    section.classList.add("hidden");
  });

  // SEMBUNYIKAN MENU JUGA
  const menu = document.getElementById("menu");
  if (menu) menu.classList.add("hidden");

  // tampilkan target
  const target = document.getElementById(id);
  if (target) {
    target.classList.remove("hidden");
  }
};
///////////////////////////////
// KEMBALI KE MENU
///////////////////////////////
window.showMenu = function () {

  document.querySelectorAll(".content-section").forEach(section => {
    section.classList.add("hidden");
  });

  const menu = document.getElementById("menu");
  if (menu) menu.classList.remove("hidden");
};

///////////////////////////////
// RELOAD KE HOME
///////////////////////////////
window.kembaliHome = function () {
  location.reload();
};

///////////////////////////////
// ADMIN LOGIN
///////////////////////////////
window.bukaAdmin = function () {

  const pass = prompt("Masukkan password admin");

  if (pass === "admin123") {
    window.location.href = "admin.html";
  } else {
    alert("Password salah");
  }
};

///////////////////////////////
// SUBMIT LAPORAN
///////////////////////////////
const form = document.getElementById("laporForm");

if (form) {

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const kategori = document.getElementById("kategori").value;
    const judul = document.getElementById("judulLaporan").value;
    const isi = document.getElementById("isiLaporan").value;
    
    const kode = "SWK-" + Math.floor(1000 + Math.random() * 9000);

await addDoc(collection(db, "laporan"), {
  kode: kode,
  kategori: kategori,
  judul: judul,
  isi: isi,
  status: "Diproses",
  tanggal: new Date()
});
    
    alert("Laporan berhasil dikirim!\nKode Tracking: " + kode);

    form.reset();

    showSection("konfirmasi");
  });
}

///////////////////////////////
// ADMIN LOAD DATA
///////////////////////////////
window.loadLaporan = async function () {

  const list = document.getElementById("adminList");

  if (!list) return;

  list.innerHTML = "Loading...";

  const q = query(
    collection(db, "laporan"),
    orderBy("tanggal", "desc")
  );

  const snapshot = await getDocs(q);

  list.innerHTML = "";

  if (snapshot.empty) {
    list.innerHTML = "<p>Belum ada laporan</p>";
    return;
  }

  snapshot.forEach((doc) => {

    const data = doc.data();

   list.innerHTML += `
  <div class="admin-card">
    <h4>${data.judul}</h4>
    <small>${data.kategori}</small>
    <p>${data.isi}</p>
  </div>
    `;
  })
};

window.cekTracking = async function () {

  const kode = document.getElementById("cariKode").value;
  const hasil = document.getElementById("hasilTracking");

  if (!kode) {
    hasil.innerHTML = "Masukkan kode terlebih dahulu!";
    return;
  }

  hasil.innerHTML = "Mencari...";

  const q = query(
    collection(db, "laporan"),
    orderBy("tanggal", "desc")
  );

  const snapshot = await getDocs(q);
  let ditemukan = false;

  snapshot.forEach((doc) => {
    const data = doc.data();

    if (data.kode && data.kode === kode.trim()) {

      hasil.innerHTML = `
        <p><strong>Kode:</strong> ${data.kode}</p>
        <p><strong>Judul:</strong> ${data.judul}</p>
        <p><strong>Status:</strong> ${data.status}</p>
      `;

      ditemukan = true;
    }
  });

  if (!ditemukan) {
    hasil.innerHTML = "Kode tidak ditemukan.";
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
    }
  });
});

cards.forEach(card => observer.observe(card));
}); 
