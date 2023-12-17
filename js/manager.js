let fa_user_circle_btn = document.querySelector(".fa-user-circle"),
  manager_action = document.querySelector(".manager_action");

fa_user_circle_btn.addEventListener("click", () => {
  manager_action.classList.toggle("active");
});

let side_navbar = document.querySelector(".side_navbar"),
  hamburgur = document.querySelector(".fa-bars");

hamburgur.addEventListener("click", () => {
  side_navbar.classList.toggle("active");
  hamburgur.classList.toggle("fa-x");
});
window.addEventListener("scroll", () => {
  side_navbar.classList.remove("active");
  hamburgur.classList.remove("fa-x");
});
document.querySelector(".main_content").addEventListener("click", () => {
  side_navbar.classList.remove("active");
  hamburgur.classList.remove("fa-x");
});

let add_item_btn = document.querySelector(".add_item"),
  cancle_btn = document.querySelector(".cancle_btn"),
  cancle = document.querySelector(".cancle"),
  add_food_popup = document.querySelector(".add_food_popup"),
  closeFoodPopUp = () => {
    add_food_popup.classList.remove("active");
  };

add_item_btn.addEventListener("click", () => {
  add_food_popup.classList.add("active");
});

cancle.addEventListener("click", closeFoodPopUp);
cancle_btn.addEventListener("click", closeFoodPopUp);

let imageInput = document.getElementById("image-input"),
  imagePreview = document.getElementById("image_preview"),
  hideSpan = document.querySelector(".hide");

imageInput.addEventListener("change", function () {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      imagePreview.style.display = "block";
      imagePreview.style.border = "2px solid var(--active-blue-)";
      hideSpan.style.display = "none";
    };

    reader.readAsDataURL(file);
  } else {
    imagePreview.src = "";
    imagePreview.style.display = "none";
    hideSpan.style.display = "block";
  }
});
