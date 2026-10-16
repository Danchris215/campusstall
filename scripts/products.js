import { items } from "./items.js";

let activeCategory = "all";
function filterAndRenderItems() {
  const input = document.querySelector(".js-search-bar");
  const filterText = input ? input.value.toLowerCase() : "";
  const listingsContainer = document.querySelector(".listings");

  if (!listingsContainer) return;

  let accumulatedHTML = "";

  items.forEach((item) => {
    // Check match criteria 1: Search bar text
    const matchesSearch = item.name.toLowerCase().includes(filterText);

    // Check match criteria 2: Category button (ensure item.category matches your data structure)
    const matchesCategory =
      activeCategory === "all" ||
      item.category.toLowerCase() === activeCategory;

    // Item must satisfy BOTH filters to show up
    if (matchesSearch && matchesCategory) {
      accumulatedHTML += renderProducts(item);
    }
  });

  listingsContainer.innerHTML = accumulatedHTML;
}
function renderProducts(item) {
  return `
  <a href='product.html?id=${item.id}' class='product-anchor'>
          <div class="listing-card">
            <div class="listing-img">
              <img src="${item.image}" alt="" />
            </div>
            <div class="listing-description">
              <div>${item.name}</div>
              <div>₦${item.price}</div>
              <div>${item.room}</div>
            </div>
    </div>
    </a>`;
}
const searchInput = document.querySelector(".js-search-bar");
if (searchInput) {
  searchInput.addEventListener("keyup", filterAndRenderItems);
}

const categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".category-btn.active")?.classList.remove("active");
    button.classList.add("active");

    activeCategory = button.getAttribute("data-category");

    filterAndRenderItems();
  });
});

filterAndRenderItems();
