import {closeCheckoutModal} from "./checkout.js";

export function initPayButton(){
    document.querySelector("#checkoutButton").addEventListener("click", initPay);
}

function initPay(){
    closeCheckoutModalWithoutBackground();
    removePreviousEventListeners();
    createPaidModalContainer()
    document.querySelector(".paidModalContainer").innerHTML = createPaidModal();
    initCloseModal();
}

function closeCheckoutModalWithoutBackground(){
    document.querySelector(".checkoutModalContainer").remove();
}

function removePreviousEventListeners(){
    document.querySelector(".bluredBackground").removeEventListener("click", closeCheckoutModal);
}

function createPaidModalContainer(){
    let paidModalContainer = document.createElement("div");
    paidModalContainer.classList.add("paidModalContainer");
    document.body.append(paidModalContainer);
}

function initCloseModal(){
    document.querySelector(".bluredBackground").addEventListener("click", closePaidModal);
    document.querySelector(".close").addEventListener("click", closePaidModal);
    document.querySelector("#closeButton").addEventListener("click", closePaidModal);
}

export function closePaidModal(){
    document.querySelector(".paidModalContainer").remove();
    document.querySelector(".bluredBackground").remove();
}

function orderNumberGenerator(){
    return Math.floor(Math.random() * 1000000);
}

function createPaidModal(){
    let orderData = ``;
    orderData += `
    <div class="cartReviewModal" id="paidModal">
        <p class="modalMessage">Your order number is: ${orderNumberGenerator()}</p>
        <img class="keanuReaves" style="width: 25%" src="/static/pictures/webshop_title_man_big.png" alt="Keanu Reaves says: You are breath-taking!">
    </div>
    <p class="modalMessage">You are breathtaking!</p>
    `
    return `
    <div id="cartReviewModal">
        <div class="closeContainer">
            <span class="close">&times;</span>
        </div>
        <p class="modalMessage">Thank you for the purchase!</p>
        ${orderData}
    </div>
    `
    ;
}
