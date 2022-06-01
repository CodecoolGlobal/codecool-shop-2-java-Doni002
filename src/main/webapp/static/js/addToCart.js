export let cart = [];

export async function init() {
    cart = await getProductsInCart();
    addToCartCounter();
    for (const button of document.querySelectorAll(".addToCartButton")) {
        addEventListenersForButtons(button)
    }
}

function addEventListenersForButtons(btn) {
    btn.addEventListener("click", () => addToCart(btn));
}

export async  function checkIfAlreadyInCart(newProduct){
    for (let product of cart){
        if (product.id === newProduct.id){
            product["quantity"] = product["quantity"] + 1;
            return;
        }
    }
    newProduct["quantity"] = newProduct["quantity"];
    cart = await getProductsInCart();
}

async function addToCart(btn){
    let product = await sendProductIdToBackEnd(btn.getAttribute("productId"));
    await checkIfAlreadyInCart(product);
    addToCartCounter();
}

function addToCartCounter(){
    let count = 0;
    for (const item of cart) {
        if(item["quantity"] === 1){
            count++;
        } else {
            count += item["quantity"];
        }
    }
    document.querySelector("#cartCounter").innerText = count;
}

async function sendProductToBackEnd(url){
    let response = await fetch(url);
    return response.json();
}

async function fetchProductsInCart(url){
    let response = await fetch(url);
    return response.json();
}

async function getProductsInCart(){
    return await fetchProductsInCart("/cart/api/get");
}

async function sendProductIdToBackEnd(productId){
    return await sendProductToBackEnd("/cart/add?productId=" + productId);
}