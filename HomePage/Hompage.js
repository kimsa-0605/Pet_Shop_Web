var fetured_products = [
    {
        id: 1,
        name: "Dried meat",
        quantity: 4,
        price: "200.000",
        image: "./Hình ảnh/Anh4.webp",
        description: "Roasted and smoked beef liver for dogs. Nutritional composition: Crude protein ≥18%, Crude fat ≥5%, Crude fiber ≤9%, Crude ash ≤1%, Minerals ≥1.5%, Calcium ≥1.2%, Phosphorus ≥0.5%, Salt ≤0.09%, Moisture ≤10%. Suitable for all breeds.",
        
    },
    {
        id: 2,
        name: "Chicken jerky",
        quantity: 10,
        price: "150.000",
        image: "./Hình ảnh/Anh3.webp",
        description: "Chicken jerky strips, high in protein. Nutritional composition: Crude protein ≥22%, Crude fat ≤3%, Moisture ≤12%. Perfect for dogs with sensitive stomachs.",
    },
    {
        id: 3,
        name: "Beef bites",
        quantity: 8,
        price: "180.000",
        image: "./Hình ảnh/Anh2.webp",
        description: "Small beef bites, easy to chew. Nutritional composition: Crude protein ≥20%, Crude fat ≤5%, Moisture ≤11%. Ideal for training.",
    }
]

var best_selling = [
        {
            id: 4,
            name: "Chicken nugget",
            quantity: 10,
            price: "150.000",
            image: "./Hình ảnh/Anh2.webp",
            description: "Crunchy chicken nuggets. Nutritional composition: Crude protein ≥25%, Crude fat ≤7%, Moisture ≤12%. Perfect for snacks."
        },
        {
            id: 5,
            name: "Salmon strips",
            quantity: 12,
            price: "200.000",
            image: "./Hình ảnh/Anh2.webp",
            description: "Soft salmon strips, rich in omega-3. Nutritional composition: Crude protein ≥22%, Crude fat ≤8%, Moisture ≤10%. Great for promoting healthy skin."
        },
        {
            id: 6,
            name: "Lamb cubes",
            quantity: 6,
            price: "210.000",
            image: "./Hình ảnh/Anh2.webp",
            description: "Tender lamb cubes. Nutritional composition: Crude protein ≥24%, Crude fat ≤6%, Moisture ≤9%. Good for muscle growth."
        },
        {
            id: 7,
            name: "Duck bites",
            quantity: 15,
            price: "190.000",
            image: "./Hình ảnh/Anh2.webp",
            description: "Tasty duck bites, easy to digest. Nutritional composition: Crude protein ≥21%, Crude fat ≤5%, Moisture ≤10%. Ideal for sensitive stomachs."
        },
        {
            id: 8,
            name: "Turkey slices",
            quantity: 9,
            price: "170.000",
            image: "./Hình ảnh/Anh2.webp",
            description: "Lean turkey slices, high in protein. Nutritional composition: Crude protein ≥23%, Crude fat ≤4%, Moisture ≤11%. Excellent for active pets."
        },
        {
            id: 9,
            name: "Pork twists",
            quantity: 8,
            price: "160.000",
            image: "./Hình ảnh/Anh2.webp",
            description: "Twisted pork sticks, chewy texture. Nutritional composition: Crude protein ≥20%, Crude fat ≤5%, Moisture ≤10%. Great for teeth cleaning."
        },
        {
            id: 10,
            name: "Venison jerky",
            quantity: 7,
            price: "220.000",
            image: "./Hình ảnh/Anh2.webp",
            description: "Savory venison jerky, rich in iron. Nutritional composition: Crude protein ≥26%, Crude fat ≤6%, Moisture ≤9%. Ideal for muscle repair."
        },
        {
            id: 11,
            name: "Tuna chips",
            quantity: 14,
            price: "140.000",
            image: "./Hình ảnh/Anh2.webp",
            description: "Crispy tuna chips, light and crunchy. Nutritional composition: Crude protein ≥22%, Crude fat ≤4%, Moisture ≤10%. Perfect for light snacking."
        }
]

localStorage.setItem('fetured_products', JSON.stringify(fetured_products));
localStorage.setItem('best_selling', JSON.stringify(best_selling));

function createCard(fetured_products, i) {
    let demo = '<div class="box_item" data-aos="fade-up" data-aos-duration="1000">';
        demo += '<img src="'+ fetured_products[i].image +'" alt="Products_img">';
        demo += `<a href="detailt.html?code=${best_selling[i].id}" class="text">`;
        demo += '<div class="icon_food">';
        demo += '<p><b>' + fetured_products[i].name + '</b></p>';
        demo += '<i class="fa-regular fa-heart" style="color: orange;"></i>';
        demo += '</div>';
        demo += '<p class="price"><b>' + fetured_products[i].price + ' VNĐ</b></p>';
        demo += `</a>`;
        demo += '<button id="myBtn-fetured" class="cart-hover"><span class="fa-solid fa-cart-shopping"></span></button>';
        demo += '</div>';
    return demo;
}

function createCard_Best(best_selling, i) {
    let demo = '<div class="products">';
        demo += '<div class="img">';
        demo += '<img src="'+ best_selling[i].image +'" alt="Products_img">';
        demo += '</div>';
        demo += `<a href="detailt.html?code=${best_selling[i].id}" class="details">`;
        demo += '<div class="details-products">';
        demo += '<p class="title-product" ><b>' + best_selling[i].name + '</b></p>';
        demo += '<p class="price-product">' + best_selling[i].price + ' VNĐ</p>'; 
        demo += '</div>';
        demo += '<div class="icon-products">';
        demo += '<i class="fa-regular fa-heart"></i>';
        demo += '</div>';
        demo += `</a>`;
        demo += `<button id="myBtn-best" class="cart-hover"><span class="fa-solid fa-cart-shopping"></span></button>`;
        demo += '</div>';
    return demo;
}

// ---------------------------------HIỂN THỊ SẢN PHẨM------------------------------------

function listProducts() {
    for (let i = 0; i < fetured_products.length; i++) {
        let card = createCard(fetured_products, i);
        document.getElementById("fetured_products").innerHTML += card;
    }

    for (let i = 0; i < best_selling.length; i++) {
        let card = createCard_Best(best_selling, i);
        document.getElementById("best-product-content").innerHTML += card;
    }

    // Đảm bảo phần tử HTML myBtn đã tồn tại
    var btn = document.getElementById("myBtn");
    btn.onclick = function() {
        modal.style.display = "block";
    };
}

// -------------------------------------ĐIỀU HƯỚNG-------------------------------
function dieu_huong(page) {
    if (page === 'AboutUs') {
        location.assign("detailt.html");
    } else if (page === 'Fashion') {
        location.assign("detailt.html");
    } else if (page === 'Food') {
        location.assign("detailt.html");
    } else if (page === 'Cart') {
        location.assign("detailt.html");
    } else if (page === 'User') {
        location.assign("detailt.html");
    }
    else {
        alert("Trang không tồn tại!");
    }
}

window.onload = function() {
    listProducts();
};


// --------------------------------------MODAL------------------------
// Get the modal
var modal = document.getElementById("myModal");
console.log(modal)

// Get the button that opens the modal
var btnBest = document.getElementById("myBtn-best");
console.log(btnBest)

var btnFetured = document.getElementById("myBtn-fetured");
console.log(btnBest)

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
document.getElementById("best-product-content").addEventListener("click", function(event) {
    if (event.target && event.target.id === "myBtn-best") {
        modal.style.display = "block";
    }
});
document.getElementById("fetured_products").addEventListener("click", function(event) {
    if (event.target && event.target.id === "myBtn-fetured") {
        modal.style.display = "block";
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// ----------------------------------------------------Giỏ Hàng-------------------------------------------------
// Hiển thị ở giỏ hàng

let getData = (key) => {
    const data  = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}
let userData = getData('productInCart')
console.log(userData);
console.log(Array.isArray(userData));
if(userData){
    console.log('Success: true')
}else{
    console.log('Error')
}

function renderProductsToTable(userData, i) {
    let demo = ' <tr class="produc_In_Cart">';
    demo += '<td class="moldal-detail">';
    demo += '<img class="moldal-detail-img" src="'+ userData[i].image +'" alt="">';
    demo += '<div class="moldal-detail-infor">';
    demo += '<p class="modal-product-name">'+ userData[i].name +'</p>';
    demo += '<p class="modal-product-quantity"> Quantity: '+ userData[i].quantity +'</p>';
    demo += '</div>';
    demo += '</td>';
    demo += '<td style="color: #F87537;">'+ userData[i].price +'</td>';
    demo += '<td>'+ userData[i].quantityBuy +'</td>'
    demo += '<td style="color: #F87537;">$20</td>'
    demo += '</tr>'
    return demo;
}

function listCart() {
    document.getElementById("product-cart").innerHTML = '';
    
    for (let i = 0; i < userData.length; i++) {
        let card = renderProductsToTable(userData, i);
        document.getElementById("product-cart").innerHTML += card;
    }
}
listCart();



// function addToCartHomePage(id) {
//     console.log(id);
//     let checkProduct = productInCart.some(value => value.id === id);
//     console.log(checkProduct);
//     if(!checkProduct) {
//         let pInProduct = best_selling.find(value => value.id ===  id);
//         console.log(pInProduct);
//         productInCart.unshift ({
//             ...pInProduct,
//             quantityBuy: 1
//         })
//         localStorage.setItem("productInCart", JSON.stringify(productInCart));
//     }else {
//         let getIndex = productInCart.findIndex(value => value.id === id);
//         let pInProduct = productInCart.find(value => value.id === id)
//         productInCart[getIndex] = {
//             ...pInProduct,
//             quantityBuy: ++pInProduct.quantityBuy
//         }
//         localStorage.setItem("productInCart", JSON.stringify(productInCart));
//     }
//     alert("Product added to cart.");
// }