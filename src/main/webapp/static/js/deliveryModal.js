import {closeReviewModal} from '/static/js/cartReview.js'
import {initToCheckoutButton} from '/static/js/checkout.js'
import {cart} from '/static/js/addToCart.js;'

export function initToDeliveryButton(){
    document.querySelector("#toDeliveryButton").addEventListener("click", toDelivery);
}

function toDelivery(){
    if(checkEmpty()){
        closeReviewModalWithoutBackground();
        removePreviousEventListeners();
        createDeliveryModalContainer();
        document.querySelector(".deliveryModalContainer").innerHTML = createDeliveryModal();
        initCloseModal();
        initToCheckoutButton();
    }
    else{
        document.querySelector("#toDeliveryButton").innerText = "Cart is Empty"
    }
}

function checkEmpty(){
    if(cart.length === 0){
        return false;
    }
    return true;
}

function initCloseModal(){
    document.querySelector(".bluredBackground").addEventListener("click", closeDeliveryModal);
    document.querySelector(".close").addEventListener("click", closeDeliveryModal);
}

export function closeDeliveryModal(){
    document.querySelector(".deliveryModalContainer").remove();
    document.querySelector(".bluredBackground").remove();
}

function removePreviousEventListeners(){
    document.querySelector(".bluredBackground").removeEventListener("click", closeReviewModal);
}

function closeReviewModalWithoutBackground() {
    //document.querySelector("#cartReviewModal").remove();
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
        <form id="deliveryModal" class="form">
            <label for="name">Name:</label>
            <input class="deliveryInfo" id="name" type="text" name="name" placeholder="Enter your name">  
              
            <label for="email">Email:</label>
            <input class="deliveryInfo" id="email" type="text" name="email" placeholder="Enter your email">
            
            <label for="phone">Phone:</label>
            <input class="deliveryInfo" id="phone" type="text" name="phone" placeholder="Add your phone number">
            
            <label for="country">Country:</label>
            <input class="deliveryInfo" id="country" type="text" name="country" placeholder="Add your country">
            
            <label for="city">City:</label>
            <input class="deliveryInfo" id="city" type="text" name="city" placeholder="Add your city"> 
                    
            <label for="street">Street:</label>         
            <input class="deliveryInfo" id="street" type="text" name="street" placeholder="Enter city's street">
            <button
                style="background-image: linear-gradient(to right, rgb(169, 28, 115) 0%, rgb(219, 112, 54) 51%, rgb(169, 28, 115) 100%)"
                id="toCheckoutButton" class="cta" type="button">Continue
            </button>
        </form>
    `

    return `
    <div id="cartReviewModal">
        <div class="closeContainer">
            <span class="close">&times;</span>
        </div>
        <p class="modalMessage">Your Personal Info:</p>
        ${orderData}
    </div>
    `
    ;
}