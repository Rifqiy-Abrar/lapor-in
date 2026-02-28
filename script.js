import { db, collection, addDoc, getDocs, query, orderBy }
from "./firebase.js";
function masuk() {
  const welcome = document.getElementById("welcomeText");
  const menu = document.getElementById("menu");

  if (!welcome || !menu) return;

  welcome.classList.add("hidden-center");
  menu.classList.remove("hidden-center");
}
function showSection(id) {

  document.querySelectorAll(".content-section").forEach(sec => {
    sec.classList.add("hidden-center");
  });

  document.getElementById("menu").classList.add("hidden-center");

  const target = document.getElementById(id);

  if (target) {
    target.classList.remove("hidden-center");
  }

  if (id === "adminPage") {
    loadLaporan();
  }
}
function showMenu() {

  document.querySelectorAll(".content-section").forEach(sec => {
    sec.classList.add("hidden-center");
  });

  document.getElementById("menu").classList.remove("hidden-center");
}


function kembaliHome() {
  location.reload();
}
///////////////////////////////
///// SUBMIT LAPORAN
///////////////////////////////

const form = document.getElementById("laporForm");

if (form) {

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const kategori = document.getElementById("kategori").value;
  const isi = document.getElementById("isilaporan").value;

  await addDoc(collection(db, "laporan"), {
    kategori,
    isi,
    tanggal: new Date()
  });

  alert("Laporan terkirim");

  form.reset();

});

}
///////////////////////////////
///// ADMIN LOAD DATA
///////////////////////////////

async function loadLaporan() {

  const list = document.getElementById("adminList");

  if (!list) return;

  list.innerHTML = "Loading...";

  const q = query(
    collection(db, "laporan"),
    orderBy("tanggal", "desc")
  );

  const querySnapshot = await getDocs(q);

  list.innerHTML = "";

  if (querySnapshot.empty) {
    list.innerHTML = "<p>Belum ada laporan</p>";
    return;
  }

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    list.innerHTML += `

      <div class="admin-card">

        <h4>${data.kategori}</h4>

        <p>${data.isi}</p>

        <small>
          ${new Date(data.tanggal.seconds * 1000).toLocaleString()}
        </small>

      </div>

    `;

  });

}
