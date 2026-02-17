function masuk() {
    const welcome = document.getElementById("welcomeText");
    const menu = document.getElementById("menu");

    if (!welcome || !menu) {
        console.error("Element tidak ditemukan!");
        return;
    }

    welcome.classList.add("hidden");
    menu.classList.remove("hidden");
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
