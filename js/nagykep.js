document.addEventListener("DOMContentLoaded", function () {
  let activeTheme = localStorage.getItem("myTheme") || "dark"; // Alapértelmezett téma

  console.log(activeTheme);

  applyTheme(); // Az aktuális témát alkalmazzuk a betöltéskor

  const switchBtn = document.getElementById("switch");

  switchBtn.addEventListener("click", function () {
    // Mentsük el az új témát a localStorage-be
    activeTheme = activeTheme === "light" ? "dark" : "light";
    localStorage.setItem("myTheme", activeTheme);

    // A változón keresztül ellenőrizzük az aktív témát
    console.log(activeTheme);

    // Váltsuk át a témát
    applyTheme();
  });

  function applyTheme() {
    const body = document.querySelector("body");
    const header = document.getElementById("header");

    if (activeTheme === "light") {
      lightMode(body, header);
    } else {
      darkMode(body, header);
    }
  }

  function lightMode(body, header) {
    body.style.backgroundColor = " #f1f2f6";
    body.style.backgroundImage =
      "linear-gradient(315deg, #f1f2f6 0%, #c9c6c6 74%)";
    header.style.backgroundColor = "#d7d7d7";
    header.style.backgroundImage =
      "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
    // Módosítsd a stílust a témádnak megfelelően
  }

  function darkMode(body, header) {
    body.style.backgroundColor = "#d7d7d7";
    body.style.backgroundImage =
      "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
    header.style.backgroundColor = "#d7d7d7";
    header.style.backgroundImage =
      "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
    // Módosítsd a stílust a témádnak megfelelően
  }
});
