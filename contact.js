var reply = document.querySelector('.reply');
var sendButton = document.querySelector('.contactButton');
var textBio = document.querySelector('.bio');
var emailContact = document.querySelector('#contactEmail');


/* ----- När man trycker på skicka knappen i kontakt-formuläret ----- */

//Funktion för validering av prenumerationsemail
emailContact.addEventListener('input', function (event) {  
    if (!emailContact.validity.valid) {
     showError();
     event.preventDefault();
   } 
   else if(emailContact.validity.valid){
    reply.classList.remove('reply-active');
     document.getElementById("contactEmail").classList.remove("invalidForm");
   }
 });
 
 function showError() {
   if(emailContact.validity.valueMissing) {
     document.querySelector(".reply").classList.add("invalidMessage");
     document.getElementById("contactEmail").classList.add("invalidForm");
     reply.textContent = 'Du behöver skriva en e-postadress! :)';
  
   } else if(emailContact.validity.typeMismatch) {
     document.querySelector(".reply").classList.add("invalidMessage");
     document.getElementById("contactEmail").classList.add("invalidForm");
     reply.textContent = 'Ogiltig e-postadress';
   } 
 };

//När man trycker på skicka knappen:
sendButton.addEventListener('click', function(event) {
    reply.classList.add('reply-active');

//Om man lämnar epostfältet tomt: 
if (emailContact.value.length < 1) {
  document.querySelector(".reply").classList.add("invalidMessage");
  document.getElementById("contactEmail").classList.add("invalidForm");
  
 reply.textContent = "Fyll i e-postadress"; 
  return;
}

//Om epostadressen inte är giltig, visa felmeddelande:
    if(!emailContact.validity.valid) {
      showError();
      event.preventDefault();
      return;
}

//Om man fyllt i epostadress och text i textrutan: 
    if (textBio.value.length > 5 && emailContact.validity.valid) {
      event.preventDefault();  
      document.getElementById("contactEmail").classList.remove("invalidForm");
      reply.style.color = "black";
    reply.textContent = "Tack! Vi svarar så fort vi kan"; 
    }

     else{
      document.querySelector(".reply").classList.add("invalidMessage");
      document.getElementById("contactEmail").classList.remove("invalidForm");
      event.preventDefault();  
        reply.textContent = "Fyll i de tomma fältet"; 
    }
});
