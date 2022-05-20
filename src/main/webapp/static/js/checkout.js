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
    <div class="cartReviewModal">
        <form id="checkoutModal" class="form">
            <label for="cardNumber">Card Number:</label>
            <input id="cardNumber" type="number" name="cardNumber" placeholder="Enter your card number" required>
            
            <label for="cvv">CVV:</label>
            <input id="cvv" type="password" name="cvv" placeholder="Enter CVV" required>
            
            <label for="expireDate">Expire Date:</label>
            <input id="expireMonth" type="number" placeholder="Enter month" required>
            <input id="expireYear" type="number" placeholder="Enter year" required>   
            
            <label for="cardName">Name:</label>
            <input id="cardName" type="text" name="cardName" placeholder="Enter name" required>
            
            <p class="totalPrice">Total price: ${calculateTotalPrice()}$</p>
            <div class="buttonContainer">
                <button
                    style="background-image: linear-gradient(to right, rgb(169, 28, 115) 0%, rgb(219, 112, 54) 51%, rgb(169, 28, 115) 100%)"
                    id="checkoutButton" class="cta">Pay
                </button>
            </div>
        </form>
    </div>
    `

    return `
    <div id="cartReviewModal">
        <div class="closeContainer">
            <span class="close">&times;</span>
        </div>
        <p class="modalMessage">Your Card Info:</p>
        ${orderData}
    </div>
    `
}
