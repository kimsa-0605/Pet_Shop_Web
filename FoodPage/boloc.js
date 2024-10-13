let listProduct = [{
    id: 1,
    name: 'Premium Cat Food',
    price: 10.99,
    image: "/FoodPage-Dieu/img/chicken and rice.webp",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 2,
    name: 'Dog Food',
    price: 20.99,
    image: "/FoodPage-Dieu/img/dog food.webp",
    nature: {
        type: 'Dog Food'
    }
}, {
    id: 3,
    name: 'Premium Dog Food',
    price: 25.99,
    image: "/FoodPage-Dieu/img/dog1.webp",
    nature: {
        type: 'Dog Food'
    }
}, {
    id: 4,
    name: 'Cat Treats',
    price: 15.99,
    image: "/FoodPage-Dieu/img/fish.webp",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 5,
    name: 'Mix pate',
    price: 30,
    image: "/FoodPage-Dieu/img/nature.webp",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 6,
    name: 'Fish',
    price: 25,
    image: "/FoodPage-Dieu/img/cat1.webp",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 7,
    name: 'Vegetable',
    price: 20,
    image: "/FoodPage-Dieu/img/dog3.jpg",
    nature: {
        type: 'Dog Food'
    }
}, {
    id: 8,
    name: 'Beef',
    price: 25.99,
    image: "/FoodPage-Dieu/img/dog2.jpg",
    nature: {
        type: 'Dog Food'
    }
}, {
    id: 9,
    name: 'Chicken',
    price: 29.99,
    image: "/FoodPage-Dieu/img/turkey.webp",
    nature: {
        type: 'Dog Food'
    }
}];


//hiển thị sản phẩm:
function showProduct(products) {
    const listF = document.getElementById('listF');
    const resultCount = document.getElementById('resultCount');
    listF.innerHTML = '';
    resultCount.innerText = `Showing ${products.length} results`;

    products.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('product-item');
        newItem.innerHTML = `
            <div class="imgH"><img src="${item.image}" alt="Products_img"></div>
                <div class="detailF">
                    <div class="datailP">
                        <p><b>${item.name}</b></p>
                        <p class="price"><b>$${item.price.toFixed(2)}</b></p>
                    </div>
                    <div class="icon-products">
                        <i class="fa-regular fa-heart" style="color: orange;"></i>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
        `;
        listF.appendChild(newItem);
    });
}

//sản phẩm lọc
document.getElementById('applyFilter').addEventListener('click', function() {
    const categoryFilters = Array.from(document.querySelectorAll('.filters input[type="checkbox"]:checked')).map(cb => cb.value);
    const minPrice = parseFloat(document.querySelector('input[name="minPrice"]').value) || 0; //nho nhat 0
    const maxPrice = parseFloat(document.querySelector('input[name="maxPrice"]').value) || Infinity; //lon nhat khong gioi han
    const searchTerm = document.querySelector('input[name="search"]').value.toLowerCase(); //toLowerCase khong phan biet chu hoa/thuong

    const filteredProducts = listProduct.filter(item => { //mang chua san duoc loc
        const isInCategory = categoryFilters.length ? categoryFilters.includes(item.nature.type) : true; //isInCategory: Nếu có ít nhất một bộ lọc loại, kiểm tra xem loại của sản phẩm (item.nature.type) 
        //có nằm trong danh sách categoryFilters không.Nếu không có bộ lọc nào, trả về true(tức là sản phẩm nào cũng được chấp nhận).
        const isInPriceRange = item.price >= minPrice && item.price <= maxPrice;

        //isInPriceRange: Kiểm tra xem giá sản phẩm nằm trong khoảng từ minPrice đến maxPrice hay không.

        const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm);
        //  matchesSearchTerm: Kiểm tra xem tên sản phẩm có chứa chuỗi tìm kiếm searchTerm hay không(sử dụng includes để xác định).
        return isInCategory && isInPriceRange && matchesSearchTerm;
    });

    showProduct(filteredProducts); //hien thi sp da loc
});
// hiển thị khi chưa lọc
showProduct(listProduct);