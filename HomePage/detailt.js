
let products = [];
// Hàm lấy tham số từ URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Hàm hiển thị chi tiết sản phẩm
function displayProductDetail() {
    const code = getQueryParam('code');
    console.log(code);
    const feturedProducts = JSON.parse(localStorage.getItem('fetured_products')) || [];
    console.log(feturedProducts);
    const bestSelling = JSON.parse(localStorage.getItem('best_selling')) || [];
    console.log(bestSelling);

    console.log(Array.isArray(feturedProducts)); // Kiểm tra xem có phải là mảng không
    console.log(Array.isArray(bestSelling));

    products = feturedProducts.concat(bestSelling);
    console.log(products);

    const product = products.find(p => p.id === parseInt(code));
    console.log(product);

    if (product) {
        const productDetail = document.getElementById('detail-product');
        productDetail.innerHTML = `
        <div id="detail-product">
            <p class="title-detail-product">Product details</p>
            <div class="detail-p">
                <img src="${product.image}" id="image" alt="Products_img">
                <div class="detailt">
                    <p class="title-p">${product.name}</p>
                    <p class="quantity">Quantity: ${product.quantity}</p>
                    <p class="price">${product.price} VNĐ</p>

                    <div class="quantity-container">
                        <button class="decrease-btn">-</button>
                        <input type="number" class="quantity-input" value="1" min="1" max="100">
                        <button class="increase-btn">+</button>
                    </div>
                    
                    <div class="button-detail">
                        <button class="cart" onclick="addToCart(${product.id})"> Add to cart</button>
                        <button class="buy">Buy now</button>
                    </div>
                    <div class="share"> 
                        <p> Share: </p>
                        <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-square-google-plus"></i>
                    </div>
                </div>
            </div>
            <div class="produc-infor">
                <p class="title-infor">Product information</p>
                <hr>
                <p class="p-infor">
                    ${product.description}
                </p>
            </div>
        </div>
        `;
    } else {
        console.error('Sản phẩm không tồn tại');
    }
}

// Thêm vào giỏ hàng--------------------------------------------------
let productInCart = localStorage.getItem("productInCart") ? JSON.parse(localStorage.getItem("productInCart")) : [];
// export { productInCart };
// export 
function addToCart(id) {
    console.log(id);
    let checkProduct = productInCart.some(value => value.id === id);
    console.log(checkProduct);
    if(!checkProduct) {
        let pInProduct = products.find(value => value.id ===  id);
        console.log(pInProduct);
        productInCart.unshift ({
            ...pInProduct,
            quantityBuy: 1
        })
        localStorage.setItem("productInCart", JSON.stringify(productInCart));
    }else {
        let getIndex = productInCart.findIndex(value => value.id === id);
        let pInProduct = productInCart.find(value => value.id === id)
        productInCart[getIndex] = {
            ...pInProduct,
            quantityBuy: ++pInProduct.quantityBuy
        }
        localStorage.setItem("productInCart", JSON.stringify(productInCart));
    }
    alert("Product added to cart.");
}



// Hàm lấy sản phẩm từ local Storage
function getProductFromLocalStorage() {
    const products = JSON.parse(localStorage.getItem('products'));
    console.log(products);
    return products ? products : [];
}

// Hiển thị chi tiết sản phẩm khi trang được tải
document.addEventListener('DOMContentLoaded', displayProductDetail);

// function Back() {
//     window.location.href = 'products.html'; 
// }