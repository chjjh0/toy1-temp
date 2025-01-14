const toggle = document.getElementById("theme-toggle");
const toggleText = document.querySelectorAll(
  ".theme-toggle-container .toggle-text"
);
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    toggleText[0].classList.remove("active");
    toggleText[1].classList.add("active");
  } else {
    toggleText[1].classList.remove("active");
    toggleText[0].classList.add("active");
  }
});

const menuItems = document.querySelectorAll(".menu-item");

// 메뉴 클릭 이벤트 리스너
menuItems.forEach((item) => {
  console.log("menuItems.forEach ~ item: ", item);
  // 메뉴 클릭 이벤트 리스너
  item.addEventListener("click", (e) => {
    e.preventDefault(); // 기본 링크 동작 방지
    const submenu = item.nextElementSibling;

    if (submenu) {
      submenu.classList.toggle("active");
      item.classList.toggle("active");
    }
  });
});
