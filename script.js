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
