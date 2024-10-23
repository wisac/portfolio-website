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

document.querySelectorAll(".download-btn").forEach(btn=> {
   btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.alert("Please contact me for CV");
  View.render(4)

})})

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

//emailjs variables
const emailTemplateID = "template_zdmmd6s";
const publicKey = "86IJgs7athT9A2r1_";
const emailServiceID = "default_service";

//initialize emailjs API
(function () {
  emailjs.init(publicKey);
})();


window.onload = function () {
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    this.contact_number.value = (Math.random() * 100000) | 0;

    // send maill
    emailjs.sendForm(emailServiceID, emailTemplateID, contactForm).then(
      function () {
        alert("Email sent successfully");
      },
      function (e) {
        alert(e);
      }
    );
  });
};

export { init };
