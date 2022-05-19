import {cart} from '/static/js/addToCart.js;'
import {closeReviewModal} from '/static/js/cartReview.js'




export function initToCheckoutButton(){
    document.querySelector("#toCheckoutButton").addEventListener("click", toDelivery);
}

function toDelivery(){
    closeReviewModalWithoutBackground();
    removePreviousEventListeners();
    createDeliveryModalContainer();
    document.querySelector(".deliveryModalContainer").innerHTML = (createDeliveryModal());
    initCloseModal();
}

function initCloseModal(){
    document.querySelector(".bluredBackground").addEventListener("click", closeDeliveryModal);
    document.querySelector(".close").addEventListener("click", closeDeliveryModal);
}



function closeDeliveryModal(){
    document.querySelector(".deliveryModalContainer").remove();
    document.querySelector(".bluredBackground").remove();
}

function removePreviousEventListeners(){
    document.querySelector(".bluredBackground").removeEventListener("click", closeReviewModal);
}

function closeReviewModalWithoutBackground() {
    document.querySelector("#cartReviewModal").remove();
    document.querySelector(".modalContainer").remove();
}

function createDeliveryModalContainer(){
    let deliveryModalContainer = document.createElement("div");
    deliveryModalContainer.classList.add("deliveryModalContainer");
    document.body.append(deliveryModalContainer);
}

function createDeliveryModal(){
    let orderData = ``;
    orderData += `
    <form id="deliveryModal">
    <span class="close">X</span>
        <label>Name:
        <input id="name" type="text">
        </label>
        <label>Email:
        <input id="email" type="text">
        </label>
        <label>Phone:
        <input id="phone" type="text">
        </label>
        <label>Country:
        <input id="country" type="text">
        </label>
        <label>City:
        <input id="city" type="text">
        </label>
        <label>Street:
        <input id="street" type="text">
        </label>
        <button id="deliveryContinueButton">Continue</button>
    </form>
    `
    return orderData;
}