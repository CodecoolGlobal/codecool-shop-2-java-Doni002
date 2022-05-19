import {cart} from '/static/js/addToCart.js;'
import {closeDeliveryModal} from "./deliveryModal.js";
import {initPayButton} from "./afterPurchase.js";

export function initToCheckoutButton(){
    document.querySelector("#toCheckoutButton").addEventListener("click", initCheckout);
}

function initCheckout(){
    closeDeliveryModalWithoutBackground();
    removePreviousEventListeners();
    createCheckoutModalContainer();
    document.querySelector(".checkoutModalContainer").innerHTML = createCheckoutModal();
    initCloseModal();
    initPayButton();
}

function closeDeliveryModalWithoutBackground(){
    document.querySelector(".deliveryModalContainer").remove();
}

function removePreviousEventListeners(){
    document.querySelector(".bluredBackground").removeEventListener("click", closeDeliveryModal);
}

function createCheckoutModalContainer(){
    let checkoutModalContainer = document.createElement("div");
    checkoutModalContainer.classList.add("checkoutModalContainer");
    document.body.append(checkoutModalContainer);
}

function initCloseModal(){
    document.querySelector(".bluredBackground").addEventListener("click", closeCheckoutModal);
    document.querySelector(".close").addEventListener("click", closeCheckoutModal);
}

export function closeCheckoutModal(){
    document.querySelector(".checkoutModalContainer").remove();
    document.querySelector(".bluredBackground").remove();
}

function calculateTotalPrice(){
    let totalPrice = 0;
    for (let product of cart){
        totalPrice += product['price'] * product['quantity'];
    }
    return totalPrice;
}

function createCheckoutModal(){
    let orderData = ``;
    orderData += `
    <form id="checkoutModal">
    <span class="close">X</span>
        <label>Card Number:
            <input id="cardNumber" type="number">
        </label>
        <label>CVV:
            <input id="cvv" type="number">
        </label>
        <p>Expire Date: </p>
        <label>
            <input id="expireYear" type="number" placeholder="year">   
        </label>
        <label>
            <input id="expireMonth" type="number" placeholder="month">
        </label>
        <label>Name:
            <input id="cardName" type="text">
        </label>
        <p>Total price: ${calculateTotalPrice()}$</p>
        <button id="checkoutButton">Pay</button>
    </form>
    `
    return orderData;
}
