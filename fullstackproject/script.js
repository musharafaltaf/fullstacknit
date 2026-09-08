const profileImg = document.querySelector(".profile_img");
const profileViewer = document.querySelector(".profile_viewer");
const closePhoto = document.querySelector(".close_photo");
const menuBtn = document.querySelector(".menu_btn");
const rightMenu = document.querySelector(".right");
const navLinks = document.querySelectorAll(".right a");
const contactForm = document.querySelector(".contact_form");

profileImg.addEventListener("click", function () {
profileViewer.style.display = "flex";
});

closePhoto.addEventListener("click", function () {
profileViewer.style.display = "none";
});

profileViewer.addEventListener("click", function (event) {
if (event.target === profileViewer) {
profileViewer.style.display = "none";
}
});

menuBtn.addEventListener("click", function () {
rightMenu.classList.toggle("active");
});

navLinks.forEach(function (link) {
link.addEventListener("click", function () {
rightMenu.classList.remove("active");
});
});

contactForm.addEventListener("submit", function (event) {
event.preventDefault();
alert("Thank you for contacting me!");
contactForm.reset();
});
