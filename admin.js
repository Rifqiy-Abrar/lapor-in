import { db, collection, getDocs, query, orderBy }
from "./firebase.js";

const PASS = "admin123"; // password admin

window.login = function () {
  const input = document.getElementById("password").value;

  if (input === PASS) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("adminPage").style.display = "block";
    loadLaporan();
  } else {
    alert("Password salah");
  }
};

async function loadLaporan() {
  const list = document.getElementById("adminList");

  const q = query(
    collection(db, "laporan"),
    orderBy("tanggal", "desc")
  );

  const snap = await getDocs(q);

  list.innerHTML = "";

  snap.forEach((doc) => {
    const d = doc.data();

    list.innerHTML += `
      <div class="admin-card">
        <h4>${d.kategori}</h4>
        <p>${d.isi}</p>
      </div>
    `;
  });
}
