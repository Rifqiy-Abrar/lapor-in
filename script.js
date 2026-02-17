function masuk() {
  const welcomeText = document.getElementById("welcomeText");
  
  // jalankan animasi keluar
  welcomeText.classList.remove("show");
  welcomeText.classList.add("hide");

  // tunggu animasi selesai (0.8s sesuai CSS), baru pindah section
  setTimeout(() => {
    document.getElementById("welcomeText").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
  }, 800);
}


function showSection(id) {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

function backMenu() {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById("menu").classList.remove("hidden");
}

function kembaliHome() {
  location.reload();
}
document.getElementById("laporForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const kategori = document.getElementById("kategori").value;
  const isi = document.getElementById("isiLaporan").value;

  const laporan = {
    kategori: kategori,
    isi: isi,
    tanggal: new Date().toLocaleString()
  };

  let dataLaporan = JSON.parse(localStorage.getItem("laporan")) || [];
  dataLaporan.push(laporan);
  localStorage.setItem("laporan", JSON.stringify(dataLaporan));

  alert("Laporan Anda telah kami terima ✅");

  this.reset();
  backMenu();
});
const welcomeText = document.getElementById('welcomeText');
const toggleBtn = document.getElementById('toggleBtn');

window.onload = () => {
  welcomeText.classList.add('show');
};

toggleBtn.addEventListener('click', () => {
  welcomeText.classList.remove('show');
  welcomeText.classList.add('hide');
});
