import { loadItems, saveItems } from "./items";

const form = document.getElementById("upload-form");
const photoInput = document.getElementById("photo");
const preview = document.getElementById("preview");

let photo = "";

photoInput.addEventListener("change", () => {
  const reader = new FileReader();

  reader.onload = () => {
    photo = reader.result;
    preview.src = photo;
  };

  reader.readAsDataURL(photoInput.files[0]);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const items = loadItems();

  items.unshift({
    id: Date.now(),
    name: document.getElementById("name").value,
    price: Number(document.getElementById("price").value),
    category: document.getElementById("category").value,
    condition: document.querySelector('input[name="cond"]:checked').value,
    room: document.getElementById("room").value,
    contact: document.getElementById("contact").value,
    description: document.getElementById("desc").value,
    image: photo,
  });

  saveItems(items);
  window.location.href = "products.html";
});
