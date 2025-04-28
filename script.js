// blur card
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      cards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.style.filter = "blur(0.5rem)";
        }
      });
    });
    card.addEventListener("mouseleave", function () {
      cards.forEach((otherCard) => {
        otherCard.style.filter = "none";
      });
    });
  });
});

// hamburger menu

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.onclick = () => {
  menu.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("active");
  }
});

// active section

const sections = document.querySelector("section");
const menuAnchor = document.querySelector(".nav-menu li a");
console.log(sections);
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset > sectionTop) {
      current = section.getAttribute("id");
    }
    console.log(current);
  });
  menuAnchor.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});
