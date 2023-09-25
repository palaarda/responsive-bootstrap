document.addEventListener("DOMContentLoaded", function () {
const menuButton = document.getElementById("hamburger-menu");
const effect = document.getElementById("effect");
let isMenuOpen = false; 

menuButton.addEventListener("click", function () {
        if (!isMenuOpen) {
        effect.style.top = "300px"; 
        } else {
        effect.style.top = "150px"; 
        }
        isMenuOpen = !isMenuOpen;
    });
});
function updateEffectTop() {
  const effect = document.getElementById("effect");
  if (window.innerWidth >= 1400) {
    effect.style.top = "320px";
  } else if (window.innerWidth >= 1200) {
    effect.style.top = "260px";
  } else  {
    effect.style.top = "155px";
  }
  
}

document.addEventListener("DOMContentLoaded", updateEffectTop);
window.addEventListener("resize", updateEffectTop);
