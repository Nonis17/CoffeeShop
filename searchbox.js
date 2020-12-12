//JS for search field
var defaultText = "Search here..."; 
var searchBox = document.getElementById("search-field"); 
//default text after load 
searchBox.value = defaultText; 
//on focus behaviour 
searchBox.onfocus = function() { 
if (this.value == defaultText){
//clear text field 
this.value = ''; } } 
//on blur behaviour
searchBox.onblur = function() { 
if (this.value == "") {
//restore default text 
this.value = defaultText; } };


let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener('click', function(e){
    e.preventDefault();

//Checks if field is empty or filled out:
if (ifInputNonEmpty()) {
    //Calls function to search in the array
    searchCoffee();
  }
  else {
   return;
  }
  });


let isDisplayingSearchError = false;

//Checks if search input is empty
   function ifInputNonEmpty(){
    let srchInput = document.getElementById('search-field').value
    
    if (srchInput == "Search here..." || ""){

      if (!isDisplayingSearchError) {
        isDisplayingSearchError = true;

      errorMsg = document.createElement('p');
      errorMsg.className = 'search-not-found';
      errorMsg.innerHTML = "Skriv något i sökrutan";

      let searchErrorMsg = document.querySelector('.search-error-msg');
      console.log(searchErrorMsg);
      searchErrorMsg.appendChild(errorMsg);
         return false;
      }      
    }
    else{
    return true;
    }
    };

//Search for coffee
    function searchCoffee(){
        let searchInput = document.getElementById('search-field').value;
        
        function searchFilter(coffee) { 
          return (coffee.name.toLowerCase().includes(searchInput.toLowerCase()));
        };
        
        let searchOutput = document.querySelector('.search-result');

        let localStorageArray = [];
        for (let i = 0; i < localStorage.length; i++){
          const key = localStorage.key(i); 
          const nameValue = localStorage.getItem(key);
    
          localStorageArray.push(nameValue);
        }
             
        let filteredArray = products.filter(searchFilter);
                 
        for (let i = 0; i < filteredArray.length; i++){
          let element = filteredArray[i];
    
          searchOutput.innerHTML += `${element.name}<br />${element.description}<br />`;
        }
        
        };
        







