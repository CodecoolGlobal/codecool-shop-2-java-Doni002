//export let cart = [];

export function init(){
    for (const button of document.querySelectorAll(".addToCartButton")) {
        addEventListenersForButtons(button)
    }
}


function addEventListenersForButtons(btn) {
    btn.addEventListener("click", () => addToCart(btn));
}


export function checkIfAlreadyInCart(newProduct){
    for (let product of cart){
        if (product.id === newProduct.id){
            product["quantity"] = product["quantity"] + 1;
            return;
        }
    }
    newProduct["quantity"] = newProduct["quantity"];
    cart.push(newProduct);
}


async function addToCart(btn){
    let product = await sendProductIdToBackEnd(btn.getAttribute("productId"));
    checkIfAlreadyInCart(product);
    addToCartCounter();
}

function addToCartCounter(){
    let cartCounter = document.querySelector("#cartCounter");
    cartCounter.innerText = cart.length;
    console.log(cart)
}

async function getFetchedProduct(url){
    let response = await fetch(url);
    return response.json();
}

async function getProductsInCart(productId){
    return await getFetchedProduct("/cart/add?productId=" + productId);
}


async function sendProductIdToBackEnd(productId){
    return await getFetchedProduct("/cart/add?productId=" + productId);
}

