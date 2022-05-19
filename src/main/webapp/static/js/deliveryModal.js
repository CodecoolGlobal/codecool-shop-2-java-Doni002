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
    <div class="cartReviewModal">
        <form id="deliveryModal" class="form">
            <label for="name" >Name:</label>
            <input id="name" type="text" name="name" placeholder="Enter your name">  
              
            <label for="email">Email:</label>
            <input id="email" type="text" name="email" placeholder="Enter your email">
            
            <label for="phone">Phone:</label>
            <input id="phone" type="text" name="phone" placeholder="Add your phone number">
            
            <label for="country">Country:</label>
            <input id="country" type="text" name="country" placeholder="Add your country">
            
            <label for="city">City:</label>
            <input id="city" type="text" name="city" placeholder="Add your city"> 
                    
            <label for="street">Street:</label>         
            <input id="street" type="text" name="street" placeholder="Enter city's street">
            
            <div class="buttonContainer">
                <button
                    style="background-image: linear-gradient(to right, rgb(169, 28, 115) 0%, rgb(219, 112, 54) 51%, rgb(169, 28, 115) 100%)"
                    id="deliveryContinueButton" class="cta">Continue
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
        <p class="modalMessage">Your Personal Info:</p>
        ${orderData}
    </div>
    `
    ;
}