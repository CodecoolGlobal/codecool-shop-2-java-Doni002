export let cart = [];

function init(){
    getButtons();
}

function getButtons(){
    document.querySelectorAll(".btn-success").forEach(addEventListenersForButtons)
}

function addEventListenersForButtons(btn) {
    btn.addEventListener("click", () => addToCart(btn));
}

function checkIfAlreadyInCart(newProduct){
    for (let product of cart){
        if (product.id === newProduct.id){
            product["quantity"] = product["quantity"] + 1;
            product["price"] = product["price"] + product["price"];
            return;
        }
    }
    cart.push(newProduct);
}

async function addToCart(btn){
    let product = await sendProductIdToBackEnd(btn.getAttribute("productId"));
    checkIfAlreadyInCart(product);
    console.log(cart);
}

async function getFetchedProduct(url){
    let response = await fetch(url);
    return response.json();
}

async function sendProductIdToBackEnd(productId){
    return await getFetchedProduct("/cart/add?productId=" + productId);
}

init();