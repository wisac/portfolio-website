const mainContainer = document.querySelector(".main-content");
const sections = document.querySelectorAll(".section");
const navigatorsContainer = document.querySelector(".navigators");
const navigators = document.querySelectorAll(".navigator");

export const View = {
   render(sectionIndex) {
      this._hideNavigators();
      this._hideSections();
      this._showNavigator(sectionIndex);
      this.showSection(sectionIndex);
   },

   //show active sections
   _showSection(sectionIndex) {
      sections[sectionIndex].classList.add("active-navigator");
   },

   //hide all sections
   _hideSections() {
      sections.forEach((section) => {
         section.classList.remove("active-navigator");
      });
      navigators.forEach((navigator) => {
         navigator.classList.remove("active-navigator");
      });
   },

   // show active navigators
   _showNavigator(navigatorIndex) {
      this._hideNavigators();
      navigators[navigatorIndex].classList.add("active-navigator");
   },

   // hide all navigators
   _hideNavigators() {
      navigators.forEach((navigator) => {
         navigator.classList.remove("active-navigator");
      });
   },
};

export { navigatorsContainer, navigators };
