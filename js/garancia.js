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
      const guarantee = document.querySelector(".guarantee");
      const storyText = document.querySelector(".story-text");
      const link = document.querySelector(".scania-link");
  
      if (activeTheme === "light") {
        lightMode(body, header, guarantee, storyText, link);
      } else {
        darkMode(body, header, guarantee, storyText, link);
      }
    }
  
    function lightMode(body, header, guarantee, storyText, link) {
      body.style.backgroundColor = " #f1f2f6";
      body.style.backgroundImage =
        "linear-gradient(315deg, #f1f2f6 0%, #c9c6c6 74%)";
      header.style.backgroundColor = "#d7d7d7";
      header.style.backgroundImage =
        "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
        guarantee.style.backgroundColor = "white";
        guarantee.style.backgroundImage = "none";
        storyText.style.color = "black";
        storyText.style.textShadow = "none";
        link.style.color = "black";
        link.style.textShadow = "none";
      // Módosítsd a stílust a témádnak megfelelően
    }
  
    function darkMode(body, header, guarantee, storyText,link) {
      body.style.backgroundColor = "#d7d7d7";
      body.style.backgroundImage =
        "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
      header.style.backgroundColor = "#d7d7d7";
      header.style.backgroundImage =
        "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
        guarantee.style.backgroundColor = "#d7d7d7";
        guarantee.style.backgroundImage =
        "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
        storyText.style.color = "white";
        storyText.style.textShadow = "1px 1px 1px black";
        link.style.color = "white";
        link.style.textShadow = "1px 1px 4px black";
      // Módosítsd a stílust a témádnak megfelelően
    }
  });
  

  function OlvasdTovabb() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("btn-more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Hogy a titok miben rejlik?";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Bezárás";
      moreText.style.display = "inline";
    }
  }