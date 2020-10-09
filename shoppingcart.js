var cart = ["Arabic Coffee", "Peru Coffee"];

//We create new html elements with this 
const cartList = document.querySelector('.itemsShoppingCart');

for (i = 0; i < cart.length; i++){

 //Create element 
 const li = document.createElement('li');
 const coffeeItem = document.createElement('span');
 const deleteBtn = document.createElement('span');

//add content to span-tags
deleteBtn.textContent = 'Delete';
coffeeItem.textContent = value; 

//add classes
coffeeItem.classList.add('item');
deleteBtn.classList.add('delete'); 

//append to document (orders matter here!)
li.appendChild(coffeeItem); 
li.appendChild(deleteBtn); 

//Append the li to the DOM  
cartList.appendChild(li)
}

//delete items in shopping cart
const list = document.querySelector('.container-shoppingcart ul'); 

list.addEventListener('click', function(e)
{
    if (e.target.className == 'delete'){
        const li = e.target.parentElement; 
        list.removeChild(li); 

    }
});
