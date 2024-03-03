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
    const card1 = document.querySelector(".number1");
    const card2 = document.querySelector(".number2");
    const card3 = document.querySelector(".number3");
    const card4 = document.querySelector(".number4");
    const cardTitle1 = document.querySelector(".title-1");
    const cardTitle2 = document.querySelector(".title-2");
    const cardTitle3 = document.querySelector(".title-3");
    const cardTitle4 = document.querySelector(".title-4");
    const cardText1 = document.querySelector(".card-text-first");
    const cardText2 = document.querySelector(".card-text-second");
    const cardText3 = document.querySelector(".card-text-third");
    const cardText4 = document.querySelector(".card-text-forth");
    const arrowLeft = document.querySelector(".carousel-control-prev");
    const arrowRight = document.querySelector(".carousel-control-next");

    if (activeTheme === "light") {
      lightMode(
        body,
        header,
        card1,
        card2,
        card3,
        card4,
        cardTitle1,
        cardTitle2,
        cardTitle3,
        cardTitle4,
        cardText1,
        cardText2,
        cardText3,
        cardText4,
        arrowLeft,
        arrowRight
      );
    } else {
      darkMode(
        body,
        header,
        card1,
        card2,
        card3,
        card4,
        cardTitle1,
        cardTitle2,
        cardTitle3,
        cardTitle4,
        cardText1,
        cardText2,
        cardText3,
        cardText4,
        arrowLeft,
        arrowRight
      );
    }
  }

  function lightMode(
    body,
    header,
    card1,
    card2,
    card3,
    card4,
    cardTitle1,
    cardTitle2,
    cardTitle3,
    cardTitle4,
    cardText1,
    cardText2,
    cardText3,
    cardText4,
    arrowLeft,
    arrowRight
  ) {
    body.style.backgroundColor = " #f1f2f6";
    body.style.backgroundImage =
      "linear-gradient(315deg, #f1f2f6 0%, #c9c6c6 74%)";
    header.style.backgroundColor = "#d7d7d7";
    header.style.backgroundImage =
      "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
    card1.style.backgroundColor = "white";
    card1.style.backgroundImage = "none";
    card2.style.backgroundColor = "white";
    card2.style.backgroundImage = "none";
    card3.style.backgroundColor = "white";
    card3.style.backgroundImage = "none";
    card4.style.backgroundColor = "white";
    card4.style.backgroundImage = "none";
    cardTitle1.style.color = "#535353";
    cardTitle2.style.color = "#535353";
    cardTitle3.style.color = "#535353";
    cardTitle4.style.color = "#535353";
    cardText1.style.color = "black";
    cardText2.style.color = "black";
    cardText3.style.color = "black";
    cardText4.style.color = "black";
    arrowLeft.style.filter = "invert(1)";
    arrowRight.style.filter = "invert(1)";
    // Módosítsd a stílust a témádnak megfelelően
  }

  function darkMode(
    body,
    header,
    card1,
    card2,
    card3,
    card4,
    cardTitle1,
    cardTitle2,
    cardTitle3,
    cardTitle4,
    cardText1,
    cardText2,
    cardText3,
    cardText4,
    arrowLeft,
    arrowRight
  ) {
    body.style.backgroundColor = "#d7d7d7";
    body.style.backgroundImage =
      "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
    header.style.backgroundColor = "#d7d7d7";
    header.style.backgroundImage =
      "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
    card1.style.backgroundColor = "#d7d7d7";
    card1.style.backgroundImage =
      "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
    card2.style.backgroundColor = "#d7d7d7";
    card2.style.backgroundImage =
      "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
    card3.style.backgroundColor = "#d7d7d7";
    card3.style.backgroundImage =
      "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
    card4.style.backgroundColor = "#d7d7d7";
    card4.style.backgroundImage =
      "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";

    cardTitle1.style.color = "white";
    cardTitle1.style.textShadow = "1px 1px 1px black";
    cardTitle2.style.color = "white";
    cardTitle2.style.textShadow = "1px 1px 1px black";
    cardTitle3.style.color = "white";
    cardTitle3.style.textShadow = "1px 1px 1px black";
    cardTitle4.style.color = "white";
    cardTitle4.style.textShadow = "1px 1px 1px black";
    cardText1.style.color = "white";
    cardText2.style.color = "white";
    cardText3.style.color = "white";
    cardText4.style.color = "white";
    arrowLeft.style.filter = "none";
    arrowRight.style.filter = "none";
    // Módosítsd a stílust a témádnak megfelelően
  }
});
