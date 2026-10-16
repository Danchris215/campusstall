export const items = [
  {
    id: "1",
    name: "Hostel reading lamp",
    price: 4500,
    category: "Electronics",
    condition: "Used",
    room: "Block C, Room 214",
    description:
      "Works perfectly and comes with a spare bulb. Bright enough for late-night reading, clamps onto a desk or bed frame.",
    contact: "08000000001",
    image: "images/reading_lamp.jpg",
    createdAt: new Date(new Date(1791000000000).toUTCString()),
    sold: false,
  },
  {
    id: "2",
    name: "Calculus textbook",
    price: 6000,
    category: "Books",
    condition: "Used",
    room: "Block A, Room 105",
    description:
      "Clean pages with no missing sections. A few pencil notes in the early chapters.",
    contact: "08000000002",
    image: "images/calculus_textbook.jpg",
    createdAt: new Date(new Date(1791000000000).toUTCString()),
    sold: false,
  },
  {
    id: "3",
    name: "Mini rice cooker",
    price: 12500,
    category: "Kitchen",
    condition: "New",
    room: "Block B, Room 320",
    description: "Unused and still in its box. Small enough for a hostel room.",
    contact: "08000000003",
    image: "images/rice_cooker.jpg",
    createdAt: new Date(new Date(1791000000000).toUTCString()),
    sold: false,
  },
  {
    id: "4",
    name: "Denim jacket",
    price: 8000,
    category: "Clothing",
    condition: "Used",
    room: "Block D, Room 018",
    description: "Medium size, in good condition with no tears or stains.",
    contact: "08000000004",
    image: "images/denim_jacket.jpg",
    createdAt: new Date(new Date(1791000000000).toUTCString()),
    sold: false,
  },

  {
    id: "5",
    name: "Study table",
    price: 18000,
    category: "Furniture",
    condition: "Used",
    room: "Block A, Room 301",
    description:
      "Sturdy table with a drawer. Buyer should arrange to carry it.",
    contact: "08000000005",
    image: "images/study_table.jpg",
    createdAt: new Date(new Date(1791000000000).toUTCString()),
    sold: false,
  },
  {
    id: "6",
    name: "Scientific calculator",
    price: 7000,
    category: "Stationery",
    condition: "New",
    room: "Block C, Room 110",
    description:
      "Brand new and allowed in most exam halls. Includes the cover.",
    contact: "08000000006",
    image: "images/scientific_calculator.jpg",
    createdAt: new Date(new Date(1791000000000).toUTCString()),
    sold: false,
  },
  {
    id: "7",
    name: "Extension box",
    price: 3500,
    category: "Electronics",
    condition: "Used",
    room: "Block B, Room 207",
    description: "Four sockets with a working switch and a long cable.",
    contact: "08000000007",
    image: "images/extension_box.jpg",
    createdAt: new Date(new Date(1791000000000).toUTCString()),
    sold: false,
  },
  {
    id: "8",
    name: "Mattress topper",
    price: 15000,
    category: "Furniture",
    condition: "New",
    room: "Block D, Room 122",
    description:
      "Single-bed size, never used. Makes a hostel mattress much softer.",
    contact: "08000000008",
    image: "images/mattress_topper.jpg",
    createdAt: new Date(new Date(1791000000000).toUTCString()),
    sold: false,
  },
];

export function loadItems() {
  return JSON.parse(localStorage.getItem("items")) || [];
}
export function saveItems(items) {
  localStorage.setItem("items", JSON.stringify(items));
}
