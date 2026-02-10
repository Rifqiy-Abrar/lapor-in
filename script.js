function masuk() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

function showSection(id) {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

function backMenu() {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById("menu").classList.remove("hidden");
}

function kirim() {
  let kategori = document.getElementById("kategori").value;
  let judul = document.getElementById("judul").value;
  let isi = document.getElementById("isi").value;

  if (!kategori || !judul || !isi) {
    alert("Harap isi semua data.");
    return;
  }

  document.getElementById("form").classList.add("hidden");
  document.getElementById("konfirmasi").classList.remove("hidden");
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
