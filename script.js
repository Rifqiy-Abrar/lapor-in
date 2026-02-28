function masuk() {
    const welcome = document.getElementById("welcomeText");
    const menu = document.getElementById("menu");

    if (!welcome || !menu) {
        console.error("Element tidak ditemukan!");
        return;
    }

    welcome.classList.add("hidden-center");
    menu.classList.remove("hidden-center");
}
function showSection(id) {

    // sembunyikan semua content
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden-center');
    });

    // sembunyikan menu
    document.getElementById('menu').classList.add('hidden-center');

    // tampilkan yang dipilih
    document.getElementById(id).classList.remove('hidden-center');
}

function showMenu() {

    // sembunyikan semua content
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden-center');
    });

    // tampilkan menu kembali
    document.getElementById('menu').classList.remove('hidden-center');
}
function backMenu() {
   document.querySelectorAll("section").forEach(sec => {
        sec.classList.add("hidden-center");
    });
  document.getElementById("menu").classList.remove("hidden-center");
}

function kembaliHome() {
  location.reload();
}
document.getElementById("laporForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const kategori = document.getElementById("kategori").value;
    const isi = document.getElementById("isilaporan").value;

    console.log(kategori, isi);
});

  const kategori = document.getElementById("kategori").value;
  const isi = document.getElementById("isilaporan").value;

  const laporan = {
    kategori: kategori,
    isi: isi,
    tanggal: new Date().toLocaleString()
  };
  // tampilkan konfirmasi
  document.getElementById("kirimLaporan").classList.add("hidden-center");
  document.getElementById("konfirmasi").classList.remove("hidden-center");

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
        section.classList.add('hidden-center');
    });

    document.getElementById('menu').classList.add('hidden-center');
    target.classList.remove('hidden-center');
}
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const kategoriEl = document.getElementById("kategori");
  const isiEl = document.getElementById("isilaporan");

  if (!kategoriEl || !isiEl) {
    alert("ID tidak ditemukan! Cek HTML.");
    return;
  }

  const kategori = kategoriEl.value;
  const isi = isiEl.value;

  try {
    await addDoc(collection(db, "laporan"), {
      kategori,
      isi,
      tanggal: new Date()
    });

    alert("Laporan berhasil dikirim!");
    form.reset();
  } catch (error) {
    console.error(error);
  }
});
window.onload = () => {
  hideAll();
  document.getElementById("welcome").classList.remove("hidden");
};
