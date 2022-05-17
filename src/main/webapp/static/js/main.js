function init(){
    getButtons();
}

function getButtons(){
    document.querySelectorAll(".btn-success").forEach(addEventListenersForButtons)
}

function addEventListenersForButtons(btn){
    btn.addEventListener("click",() => addToCart(btn));
}

function addToCart(btn){
    let card = btn.parentElement.parentElement.parentElement;
    sendProductIdToBackEnd(btn.getAttribute("productId"));
}

function getFetchedProduct(url){
    fetch(url);
}

function sendProductIdToBackEnd(productId){
    getFetchedProduct("/cart/add?productId=" + productId);
}

init();