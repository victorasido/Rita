// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger burger diklik
document.querySelector("#burger").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan nav
const burger = document.querySelector("#burger");

document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
