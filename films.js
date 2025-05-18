
const films = [
  { id: "1", title: "علفزار (۱۴۰۰)", url: "https://www.aparat.com/v/gQxs0" },
  { id: "2", title: "کت چرمی (۱۴۰۱)", url: "https://www.aparat.com/v/f59kny3" },
  { id: "3", title: "ملاقات خصوصی (۱۴۰۰)", url: "https://www.aparat.com/v/Aysr4" },
  { id: "4", title: "سرخ‌پوست (۱۳۹۸)", url: "https://www.aparat.com/v/f340895" },
  { id: "5", title: "متری شیش و نیم (۱۳۹۷)", url: "https://www.aparat.com/v/r38s042" },
  { id: "6", title: "Parasite (2019)", url: "https://www.aparat.com/v/h00a939" },
  { id: "7", title: "CODA (2021)", url: "https://www.aparat.com/v/FJqr7" },
  { id: "8", title: "Aftersun (2022)", url: "https://www.aparat.com/v/k5047m2" },
  { id: "9", title: "All Quiet on the Western Front (2022)", url: "https://www.aparat.com/v/C2ewd" },
  { id: "10", title: "Flee (2021)", url: "https://www.aparat.com/v/5QGs0" }
];

function showFilms() {
  const phone = document.getElementById("phone").value;
  if (!phone) return alert("شماره وارد نشده!");
  const list = document.getElementById("filmList");
  list.innerHTML = "";
  films.forEach(film => {
    const div = document.createElement("div");
    div.className = "film-card";
    div.innerHTML = `<h4>${film.title}</h4><button onclick="selectFilm('${film.id}', '${film.url}')">انتخاب</button>`;
    list.appendChild(div);
  });
  document.getElementById("films").classList.remove("hidden");
}

function selectFilm(id, url) {
  if (localStorage.getItem("selectedFilm")) {
    alert("شما قبلاً انتخاب کرده‌اید.");
    window.location.href = localStorage.getItem("selectedFilm");
    return;
  }
  localStorage.setItem("selectedFilm", url);
  alert("فیلم شما انتخاب شد!");
  window.location.href = url;
}
