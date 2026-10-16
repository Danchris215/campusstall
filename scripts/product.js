import { items } from "./items.js";

let accumulatedHTML = "";
let productContainer = document.querySelector(".main");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const item = items.find((item) => item.id == id);

function renderProduct(item) {
  return `
  <div class="left-main">
          <div class="card-orange card">
          <img src="${item.image}" alt="" />
          <p class="lamp">Uploaded photo appears here</p>
        </div>
        <div>
          <div><img src="" alt="" /></div>
          <div><img src="" alt="" /></div>
          <div><img src="" alt="" /></div>
        </div>
      </div>
      <div class="right-main">
        <div class="item">
          <div class="item-name">${item.name}</div>
          <div class="item-price">₦${item.price}</div>
        </div>
        <div class="item-description">
          ${item.description}}
        </div>
        <div class="item-summary">
          <div class="item-room">
            <div>Pickup room</div>
            <div class="item-room-right">${item.room}</div>
          </div>
          <div class="item-seller">
            <div>Seller</div>
            <div class="item-seller-right">${item.contact}</div>
          </div>
          <div class="item-date">
            <div>Listed</div>
            <div class="item-date-right">${item.createdAt}</div>
          </div>
        </div>
        <div class="item-contact">
          <a href="https://wa.me/234${item.contact.slice(1)}" target="_blank" class="anchor-whatsapp-contact"><div class="whatsapp-contact">Contact seller on Whatsapp</div></a>
          <div class="mark-sold">Mark as sold</div>
        </div>
        <div class="small-text">
          There is no payment on the site. Agree a time with the sellet and pay
          when you collect
        </div>
      </div>
    </div>
            
`;
}
accumulatedHTML += renderProduct(item);
productContainer.innerHTML = accumulatedHTML;
