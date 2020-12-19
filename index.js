
let carts = document.querySelectorAll('.add-cart');

//An Array with objects inside
for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
cartNumbers(products[i]);

//Calls function to calculate total cost of products
totalCost(products[i]);
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
    console.log("product "+product);
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

//Function that calculates total cost of items in cart: 
function totalCost(product){
let cartCost = localStorage.getItem("totalCost");

//To check if there is anything in the cart: 
if(cartCost != null){
//Converts a parse string to a number:
cartCost = parseInt(cartCost); 
localStorage.setItem("totalCost", cartCost + product.price);
}else{
    localStorage.setItem("totalCost", product.price);
}
}

/* ------- Here starts Java Script for Shopping Cart page ------*/

function displayCart(){
//Gets items that is in LocalStorage:
 let cartItems = localStorage.getItem("productsInCart");
 //Converts JSON string to JS numbers:
 cartItems = JSON.parse(cartItems); 

 //IF we have something in local storage(cartItems) and if we are on the right page (productContainer):
let productContainer = document.querySelector(".products");
let cartCost = localStorage.getItem("totalCost");

if (cartItems && productContainer){
    productContainer.innerHTML = '';

    

    Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
      
        <div class="product-title">
        <img src="./pics/${item.tag}.jpg" height="100" width="150">
        <span>${item.name}</span>
        </div>
        <div class="price-title">${item.price},00 kr</div>
        <div class="quantity-title">
        <ion-icon name="caret-back-outline"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon name="caret-forward-outline"></ion-icon>
        </div>
        <div class="total-title">
        ${item.inCart * item.price},00 kr
        <span class="delete">X</span>
        </div>    

        `;
    });
    productContainer.innerHTML += `
    
    <div class="basketTotalContainer">
<br>
          <h4 class="basketTotal">
        Basket total: ${cartCost},00 kr
        </h4></div>
    `;
}
}

/*HÄR BÖRJAR EXPERIMENT ATT HOVRA ÖVER KUNDVAGNEN FÖR ATT SE SINA PRODUKTER*/

let onMouseOver = document.querySelector('.dropdown'); 

onMouseOver.addEventListener('mouseover', function(){

//Gets items that is in LocalStorage:
let cartItems = localStorage.getItem("productsInCart");
//Converts JSON string to JS numbers:
cartItems = JSON.parse(cartItems); 

//IF we have something in local storage(cartItems):
let productContainer = document.querySelector(".fly-out-box");
let cartCost = localStorage.getItem("totalCost");

if (cartItems && productContainer){
   productContainer.innerHTML = '';

   Object.values(cartItems).map(item => {
       productContainer.innerHTML += `
    
     <br>
       <div class="product-title">
       <img src="./pics/${item.tag}.jpg" height="60" width="100">
       <span>${item.name}</span>
       </div>
       <div class="hover-cart-price-title">${item.price},00 kr</div><br>
       <div class="hover-cart-quantity-title">
          <span>Quantity: ${item.inCart} x  ${item.inCart * item.price},00 kr </span>
      
       <button class="hover-delete">Delete</button>
       </div><br><hr><br><br>

       `;
   });
   productContainer.innerHTML += `
   <div class="hover-basketTotalContainer">
       <span class="basketTotal">
       Total: ${cartCost},00 kr
       </span></div><br>
   `
 var anchorTag = document.createElement('a');
 anchorTag.setAttribute('href','shoppingcart.html');
 anchorTag.innerText = 'Go to checkout';
 anchorTag.classList.add('go-to-checkout');
 productContainer.appendChild(anchorTag);




   ;
}

});






//Calls a function
onLoadCartNumbers();
displayCart();


