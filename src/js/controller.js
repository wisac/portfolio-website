import { View, navigators, navigatorsContainer } from "./navigatorView.js";

// handle click event on navigators
function navClickHandler(e) {
   e.preventDefault();
   const target = e.target.closest(".navigator");
   const activeSection = +target.dataset.section;
   if (!target) return;
   View.render(activeSection);
   console.log("clicked");
}

let nightMode = false;
function init() {
   navigatorsContainer.addEventListener("click", navClickHandler);
   document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      let day = document.querySelector(".day");
      let night = document.querySelector(".night");

      if (nightMode) {
         night.style.display = "none";
         day.style.display = "inline-block";
         nightMode = false;
      } else {
         night.style.display = "inline-block";
         day.style.display = "none";
         nightMode = true;
      }

   });
}

export { init };
