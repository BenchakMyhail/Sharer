//Burger menu
const burger_btn = document.querySelector('#burger-menu_header'),
    burger_icon = burger_btn.querySelector('.burger-menu__button');

burger_btn.addEventListener('click', function (e) {
  burger_icon.classList.toggle("burger-menu_active");
});

//Validation form Send Email
const formSendEmail = document.querySelectorAll("#sendEmail");
const emailPlace = document.querySelector("#emailPlace");
const validity = emailPlace.validity;
formSendEmail.forEach((item) => { item.addEventListener("submit", function(e){
  console.log();
  
  e.preventDefault();
})});



// array1.forEach(element => console.log(element));