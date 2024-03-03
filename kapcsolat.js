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
      const container = document.querySelector(".contact-container");
  
      if (activeTheme === "light") {
        lightMode(body, header, container);
      } else {
        darkMode(body, header, container);
      }
    }
  
    function lightMode(body, header, container) {
      body.style.backgroundColor = " #f1f2f6";
      body.style.backgroundImage =
        "linear-gradient(315deg, #f1f2f6 0%, #c9c6c6 74%)";
      header.style.backgroundColor = "#d7d7d7";
      header.style.backgroundImage =
        "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
        container.style.backgroundColor = "white";
        container.style.backgroundImage = "none";
        container.style.color = "black";
        container.style.textShadow = "none";
      // Módosítsd a stílust a témádnak megfelelően
    }
  
    function darkMode(body, header, container) {
      body.style.backgroundColor = "#d7d7d7";
      body.style.backgroundImage =
        "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
      header.style.backgroundColor = "#d7d7d7";
      header.style.backgroundImage =
        "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
        container.style.backgroundColor  = "#d7d7d7";
        container.style.backgroundImage  =
        "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
        container.style.color = "white";
        container.style.textShadow = "1px 1px 1px black";
      // Módosítsd a stílust a témádnak megfelelően
    }
  });
  