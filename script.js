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

    // sembunyikan semua content
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });

    // sembunyikan menu
    document.getElementById('menu').classList.add('hidden');

    // tampilkan yang dipilih
    document.getElementById(id).classList.remove('hidden');
}

function showMenu() {

    // sembunyikan semua content
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });

    // tampilkan menu kembali
    document.getElementById('menu').classList.remove('hidden');
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
  // tampilkan konfirmasi
  document.getElementById("kirimLaporan").classList.add("hidden");
  document.getElementById("konfirmasi").classList.remove("hidden");

  // reset form
  this.reset();
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
function showSection(id) {
    console.log("ID yang dipanggil:", id);

    const target = document.getElementById(id);
    console.log("Element ditemukan:", target);

    if (!target) {
        alert("Section tidak ditemukan!");
        return;
    }

    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });

    document.getElementById('menu').classList.add('hidden');
    target.classList.remove('hidden');
}
