import {cart} from '/static/js/addToCart.js;'
import {initToDeliveryButton} from '/static/js/deliveryModal.js'

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
    createModalContainer();
    createBlurBackground();
    initCloseOnClickBackground()
    document.querySelector(".modalContainer").innerHTML += createModalForReviewCart();
    initCloseModal();
    initToDeliveryButton();
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
    //document.querySelector("#cartReviewModal").remove();
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
                <p style="color: midnightblue;">price: ${product['price']}$</p>
                <p>quantity: ${product['quantity']}</p>
            </div>
        </div>
        `
        totalPrice += product['price'] * product['quantity'];
    }

    return `
    <div id="cartReviewModal">
        <div class="closeContainer">
            <span class="close">&times;</span>
        </div>
        <p class="modalMessage">Your Cart:</p>
        ${orderData}
        <p style="filter: drop-shadow(3px 3px 5px white); color: cyan;" class="totalPrice">Total Price: ${totalPrice}$</p>
        <div class="buttonContainer">
            <button style="background-image: linear-gradient(to right, rgb(169, 28, 115) 0%, rgb(219, 112, 54) 51%, rgb(169, 28, 115) 100%)" id="toDeliveryButton" class="cta" >Proceed to Checkout</button>
        </div>
    </div>
    `
}

init();