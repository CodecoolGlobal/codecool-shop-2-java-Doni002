import {cart} from '/static/js/addToCart.js;'
import {initToCheckoutButton} from '/static/js/deliveryModal.js'

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
    createModalContainer();
    createBlurBackground();
    initCloseOnClickBackground()
    document.querySelector(".modalContainer").innerHTML += reviewCartModalHtml;
    initCloseModal();
    initToCheckoutButton();
}

export function initCloseOnClickBackground(){
    document.querySelector(".bluredBackground").addEventListener("click", closeReviewModal)
}

function createModalContainer(){
    let modalContainer = document.createElement("div");
    modalContainer.classList.add("modalContainer");
    document.body.append(modalContainer);
}

export function initCloseModal(){
    document.querySelector(".close").addEventListener("click", closeReviewModal)
}

export function closeReviewModal(){
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
            <div class="checkoutProductContainerElements">
                <img src="/static/img/product_${product['id']}.jpg" alt="" width="210" height="75">
                <p>product: ${product['name']}</p>
                <p>price: ${product['price']}$</p>
                <p>quantity: ${product['quantity']}</p>
            </div>
        </div>
        `
        totalPrice += product['price'] * product['quantity'];
    }

    return `
    <div id="cartReviewModal">
    <span class="close">&times;</span>
        ${orderData}
        <p id="cartReviewTotalPrice">total price: ${totalPrice}$</p>
        <button id="toCheckoutButton">Proceed to Checkout</button>
    </div>
    `
}

init();