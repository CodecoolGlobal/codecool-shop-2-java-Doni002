function init(){
    getButtons();
}

function getButtons(){
    document.querySelectorAll(".btn-success").forEach(addEventListenersForButtons)

}

function addEventListenersForButtons(btn){
    btn.addEventListener("click",() => addToCart(btn.getAttribute("productId")));
}

function addToCart(productId){
    console.log(productId);
}

init();