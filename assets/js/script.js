const navbar = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const lines = document.querySelectorAll(".line");
const menuItems = document.querySelectorAll(".nav-list li");

hamburger.addEventListener("click", function () {
  navbar.classList.toggle("active");
  lines.forEach(line => line.classList.toggle("hidden"));
  lines[0].classList.toggle("rotate-right");
  lines[2].classList.toggle("rotate-left");
});

menuItems.forEach(item => {
  item.addEventListener("click", function () {
    navbar.classList.remove("active");
    lines.forEach(line => line.classList.remove("hidden", "rotate-right", "rotate-left"));
  });
});

