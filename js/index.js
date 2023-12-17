// Displaying the cart Page
let cart_btn = document.querySelector(".cart");
let cart_page = document.querySelector(".cart_list");
let cart_close_btn = document.querySelector(".cart_list .fa-x");

cart_btn.addEventListener("click", () => {
  cart_page.classList.add("active");
  document.body.classList.add("active");
});
cart_close_btn.addEventListener("click", () => {
  cart_page.classList.remove("active");
  document.body.classList.remove("active");
});

// Displaying the side page
let side_page = document.querySelector(".side_page");
let side_page_btn = document.querySelector(".side_btn");
let side_page_close_btn = document.querySelector(".side_page .fa-x");

side_page_btn.addEventListener("click", () => {
  side_page.classList.add("active");
  document.body.classList.add("active");
});
side_page_close_btn.addEventListener("click", () => {
  side_page.classList.remove("active");
  document.body.classList.remove("active");
});

function decreaseQuantity(quantitySelector) {
  if (quantitySelector.value > 1) {
    quantitySelector.value = parseInt(quantitySelector.value) - 1;
  }
}

function increaseQuantity(quantitySelector) {
  quantitySelector.value = parseInt(quantitySelector.value) + 1;
}

// Handling the cart opeartions
let selected_items_container = document.querySelector(".selected_items");
let foodItems = document.querySelectorAll(".foods");
let cart = document.querySelector(".cart span");
let count = 0;

foodItems.forEach((selectdFood) => {
  selectdFood.addEventListener("click", () => {
    selectdFood.classList.toggle("active");

    let foodName = selectdFood.dataset.foodname;
    let fid = selectdFood.dataset.fid;
    let price = selectdFood.querySelector("p").dataset.price;
    let foodIimg = selectdFood.querySelector(".food_img img");

    if (selectdFood.classList.contains("active")) {
      count++;
      cart.textContent = count;
      let cartItem = document.createElement("div");
      cartItem.className = "food_list";
      cartItem.dataset.foodname = foodName;
      cartItem.innerHTML = `<p class="food_name">${foodName}</p>
             <input type="number" name="fids[]" hidden value="${fid}" />
            <div class="selected_food_img">
              <img src="${foodIimg.src}" alt="" />
              <span></span>
            </div>
            <div class="quantity">
              <i class="fas fa-minus"></i>
              <input type="number" name="quantity[]" value="1" />
              <input type="number" hidden name="price[]" value="${price}" />
              <i class="fas fa-plus"></i>
            </div>`;

      selected_items_container.appendChild(cartItem);

      let quantity = cartItem.querySelector(".quantity input");
      let lessBtn = cartItem.querySelector(".fa-minus");
      let plusBtn = cartItem.querySelector(".fa-plus");

      lessBtn.addEventListener("click", () => {
        decreaseQuantity(quantity);
      });

      plusBtn.addEventListener("click", () => {
        increaseQuantity(quantity);
      });
    } else {
      selectdFood.classList.remove("active");
      count--;
      cart.textContent = count;

      selected_items_container
        .querySelectorAll(".food_list")
        .forEach((cartItem) => {
          if (cartItem.dataset.foodname.includes(foodName)) {
            cartItem.remove();
          }
        });
    }
  });
});
