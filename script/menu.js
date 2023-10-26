var menu = [
  {
    id: 0,
    name: "Paket 1",
    desc: "Nasi Timbel + Ayam + Tahu & Tempe + Sambal + Teh",
    price: 36000,
    count: 0,
    image: "nasiTimbel.jpg",
  },
  {
    id: 1,
    name: "Nasi Goreng",
    desc: "Nasi Goreng dengan bumbu pada umumnya",
    price: 15000,
    count: 0,
    image: "nasiGoreng.jpg",
  },
  {
    id: 2,
    name: "Lemon tea",
    desc: "Es Teh + Perasan Lemon",
    price: 7000,
    count: 0,
    Image: "",
    image: "lemonTea.jpg",
  },
];

// ADD MENU CARD
const menuWrap = document.querySelector(".menu-wrap");
let card = ``;

menu.map((data) => {
  card += innerCardMenu(data.name, data.desc, data.price, data.count, data.id, data.image);
  menuWrap.innerHTML = card;
});

function innerCardMenu(name, desc, price, count, id, image) {
  return `<div class="card-warp">
        <div class="card flex ai-center jc-sb">
            <div class="menu-img">
                <img src="assets/${image}" alt="">
            </div>
            <div class="menu-desc">
                <h5>${name}</h5>
                <p class="text">${desc}</p>
                <h5 class="small">Rp. ${price}</h5>
                <div class="flex ai-center jc-sb">
                <h5 class="small" id="count${id}">Jumlah: ${count}</h5>
                <button id="addCount${id}"><i class="fa-solid fa-plus add"></i></button>
                </div>
            </div>
        </div>
    </div>`;
}

// ADD COUNT
let order = [];

menu.map((data) => {
  data.count = 0;

  const addButton = document.getElementById(`addCount${data.id}`);
  const countElement = document.getElementById(`count${data.id}`);

  addButton.addEventListener("click", function (e) {
    e.preventDefault();
    data.count++;
    countElement.innerHTML = `Jumlah : ${data.count}`;

    const subtotal = data.price * data.count;
    console.log(`Subtotal for ${data.name}: ${subtotal}`);

    if (order[data.id] == null) {
      order[data.id] = {
        id: data.id,
        name: data.name,
        desc: data.desc,
        price: data.price,
        count: data.count,
      };
    } else {
      order[data.id].count = data.count;
    }

    let totalPrice = 0;
    order.map((item) => {
      totalPrice += item.price * item.count;
    });

    console.log(`Total price : ${totalPrice}`);
    localStorage.setItem("total", totalPrice);
  });
});

const pesan = () => {
  order.map((item) => {
    if (item.count != null) {
      console.log(item.count);
      window.location.href = "order.html";
    } else {
      alert();
      console.log("Data tidak boleh kosong");
    }
  });
};
