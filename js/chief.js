let sidebarbtn = document.querySelector(".fa-arrow-left");
let sidebar = document.querySelector(".sidebar");
let mainContent = document.querySelector(".main-content");
// let shift = document.querySelector("#shift");
let logo = document.querySelector(".logo img");
sidebarbtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
  sidebarbtn.classList.toggle("fa-arrow-left");
  sidebarbtn.classList.toggle("fa-arrow-right");

  if (logo.dataset.logo == "false") {
    logo.src = "./images/logo2.png";
    logo.dataset.logo = "true";
  } else {
    logo.src = "./images/logo.png";
    logo.dataset.logo = "false";
  }
});

window.addEventListener("resize", () => {
  // console.log(window.innerWidth);
  if (window.innerWidth <= 400) {
    sidebar.classList.add("active");
    sidebarbtn.classList.toggle("fa-arrow-left");
    sidebarbtn.classList.toggle("fa-arrow-right");
  }
});
window.addEventListener("load", () => {
  // console.log(window.innerWidth);
  if (window.innerWidth <= 400) {
    sidebar.classList.add("active");
    sidebarbtn.classList.toggle("fa-arrow-left");
    sidebarbtn.classList.toggle("fa-arrow-right");
  }
});

mainContent.addEventListener("scroll", () => {
  sidebar.classList.remove("active");
  sidebarbtn.classList.toggle("fa-arrow-left");
  sidebarbtn.classList.toggle("fa-arrow-right");
});
