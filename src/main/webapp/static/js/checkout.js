import {cart} from '/static/js/addToCart.js;'

function init(){
    initAddEventListener();
}

function initAddEventListener(){
    document.querySelector("#cart").addEventListener("click", reviewCart);
}

function reviewCart(){
    displayReviewCartModal();
}

function displayReviewCartModal(){
    let reviewCartModalHtml = createModalForReviewCart()
    document.body.innerHTML += reviewCartModalHtml;
}

function createModalForReviewCart(){
    let orderData = ``;
    let totalPrice = 0;
    for (let product of cart){
        orderData += `
        <div class="checkoutProductContainer">
            <img src="/static/img/product_${product['id']}.jpg" alt="" width="210" height="75">
            <p>product: ${product['name']}</p>
            <p>price: ${product['price']}$</p>
            <p>quantity: ${product['quantity']}</p>
        </div>
        `
        totalPrice += product['price'] * product['quantity'];
    }

    return `
    <div id="cartReviewModal">
        ${orderData}
        <p id="cartReviewTotalPrice">total price: ${totalPrice}$</p>
    </div>
    `
}

init();