let carts = document.querySelectorAll('.add-cart');

//An Array with objects inside
let products = [

    {
        name: "Arabic Coffee",
        tag: "Arabic",
        price: 89,
        inCart: 0
    },
    {
        name: "Peru Coffee",
        tag: "Peru",
        price: 69,
        inCart: 0
    },
    {
        name: "Africa Coffee",
        tag: "Africa",
        price: 79,
        inCart: 0
    },
    {
        name: "Ethiopia Coffee",
        tag: "Ethiopia",
        price: 99,
        inCart: 0
    },
    {
        name: "Bali Coffee",
        tag: "Bali",
        price: 59,
        inCart: 0
    },
    {
        name: "Columbia Coffee",
        tag: "Columbia",
        price: 79,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
cartNumbers(products[i]);
    })
};

//Function that keeps numbers in cart-span tag even when page reloads
function onLoadCartNumbers(){
let productNumbers = localStorage.getItem('cartNumbers'); 

if (productNumbers){
    document.querySelector('.cart span').textContent = productNumbers;
}
}

function cartNumbers(product) {
  
    let productNumbers = localStorage.getItem('cartNumbers'); 
     
    //parseInt converts string into a number
    productNumbers = parseInt(productNumbers); 
 
 //If someone has pressed on a sales item button, store that in local storage   
 if (productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1); 
    document.querySelector('.cart span').textContent = productNumbers + 1;
 } else {
    localStorage.setItem('cartNumbers', 1); 
    document.querySelector('.cart span').textContent = 1;
 }
 setItems(product);
}

//Function to see what item we have in cart 
function setItems(product){
let cartItems = localStorage.getItem('productsInCart');

//Turns a JSON object to a JavaScript object:
cartItems = JSON.parse(cartItems);

//If something exist in the cart:
if(cartItems != null){

if(cartItems[product.tag] == undefined){
    cartItems = {
        ...cartItems,
        [product.tag]: product
    }
} 
cartItems[product.tag].inCart += 1;
} 
else {
    product.inCart = 1;

    cartItems = {
        [product.tag]: product
    }
}


//Convert JavaScript object to JSON object
localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}




//Calls a function
onLoadCartNumbers();