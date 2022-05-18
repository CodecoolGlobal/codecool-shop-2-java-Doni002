import {cart} from '/static/js/addToCart.js;'

function init(){
    initAddEventListener();
}

function initAddEventListener(){
    document.querySelector("#cart").addEventListener("click", reviewCart);
}

function reviewCart(){
    displayReviewCartModal();
    console.log(cart)
}

function displayReviewCartModal(){
    let reviewCartModalHtml = createModalForReviewCart()
    createModalContainer();
    createBlurBackground();
    initCloseOnClickBackground()
    document.querySelector(".modalContainer").innerHTML += reviewCartModalHtml;
    initCloseModal();
}

function initCloseOnClickBackground(){
    document.querySelector(".bluredBackground").addEventListener("click", closeModal)
}

function createModalContainer(){
    let modalContainer = document.createElement("div");
    modalContainer.classList.add("modalContainer");
    document.body.append(modalContainer);
}

function initCloseModal(){
    document.querySelector(".close").addEventListener("click", closeModal)
}

function closeModal(){
    document.querySelector("#cartReviewModal").remove();
    document.querySelector(".modalContainer").remove();
    document.querySelector(".bluredBackground").remove();
}

function createBlurBackground(){
    let bluredBackground = document.createElement("div");
    bluredBackground.classList.add("bluredBackground")
    document.body.append(bluredBackground);
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
    <span class="close">X</span>
        ${orderData}
        <p id="cartReviewTotalPrice">total price: ${totalPrice}$</p>
        <button>Proceed to Checkout</button>
    </div>
    `
}

init();