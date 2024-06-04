//announcement_bar_close

const announcement_bar_close = document.querySelector(
  ".announcement_bar_close"
);
const announcement_bar = document.querySelector(".announcement_bar");

announcement_bar_close.addEventListener("click", (e) => {
  e.preventDefault();
  announcement_bar.classList.add("hidden");
});

// mobile menu hide and show
const menu_btn = document.querySelector(".menu_btn");
const mobile_menu = document.querySelector(".mobile-menu");
const btn_close = document.querySelector(".btn_close");
menu_btn.addEventListener("click", (e) => {
  e.preventDefault();
  mobile_menu.classList.remove("mobile_menu");
});
btn_close.addEventListener("click", (e) => {
  e.preventDefault();
  mobile_menu.classList.add("mobile_menu");
});
