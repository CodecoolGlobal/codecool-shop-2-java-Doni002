import {cart} from '/static/js/addToCart.js;'
import {closeDeliveryModal} from "./deliveryModal.js";
import {initPayButton} from "./afterPurchase.js";

export function initToCheckoutButton(){
    document.querySelector("#toCheckoutButton").addEventListener("click", initCheckout);
}

function initCheckout(){
    if(validateForm(".deliveryInfo")){
        closeDeliveryModalWithoutBackground();
        removePreviousEventListeners();
        createCheckoutModalContainer();
        document.querySelector(".checkoutModalContainer").innerHTML = createCheckoutModal();
        initCloseModal();
        initPayButton();
    }
}

export function validateForm(selector){
    let validation;
    for (const field of document.querySelectorAll(selector)) {
        if(field.value.length === 0){
            field.style.borderColor='red';
            validation = false;
        } else {
            field.style.borderColor = "grey";
        }
    }
    if(validation !== false){
        return true;
    }
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
            <input class="paymentInfo" id="cardNumber" type="text" name="cardNumber" placeholder="Enter your card number">
            
            <label for="cvv">CVV:</label>
            <input class="paymentInfo" id="cvv" type="password" name="cvv" placeholder="Enter CVV">
            
            <label for="expireDate">Expire Date:</label>
            <input class="paymentInfo" id="expireMonth" type="number" placeholder="Enter month">
            <input class="paymentInfo" id="expireYear" type="number" placeholder="Enter year">   
            
            <label for="cardName">Name:</label>
            <input class="paymentInfo" id="cardName" type="text" name="cardName" placeholder="Enter name">
            
            <p class="totalPrice" style="color: cyan;">Total price: ${calculateTotalPrice()}$</p>
                <button
                    style="background-image: linear-gradient(to right, rgb(169, 28, 115) 0%, rgb(219, 112, 54) 51%, rgb(169, 28, 115) 100%)"
                    id="checkoutButton" class="cta" type="button">Pay
                </button>
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
