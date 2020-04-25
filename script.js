const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", function(){
  const e = "off";

  if (hamburger.classList.value === "off") {
    hamburger.classList.replace("off", "on");
    menu.classList.replace("mobile-menu-off", "mobile-menu");
  } else {
    hamburger.classList.replace("on", "off");
    menu.classList.replace("mobile-menu", "mobile-menu-off");
  }
});
