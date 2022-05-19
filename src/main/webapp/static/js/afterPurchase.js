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
    <div id="paidModal">
        <span class="close">X</span>
        <p>Thank you for the purchase!</p>
        <p>your order number is: ${orderNumberGenerator()}</p>
        <button id="closeButton">close</button>
    </div>
    `
    return orderData;
}
