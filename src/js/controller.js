import { View,navigators,navigatorsContainer } from "./navigatorView.js";

// handle click event on navigators
function navClickHandler (e) {
   e.preventDefault();
   const target = e.target.closest(".navigator");
   const activeSection = +target.dataset.section;
   if (!target) return;
   View.render(activeSection);
   console.log("clicked");

}

function init() {
   navigatorsContainer.addEventListener("click", navClickHandler);
}


export { init };