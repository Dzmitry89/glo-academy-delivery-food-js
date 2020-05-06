const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const loginForm = document.querySelector("#logInForm");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


//day1


const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name')
const buttonOut = document.querySelector('.button-out')


let login = localStorage.getItem('gloDelivery');



function toogleModalAuth() {
  modalAuth.classList.toggle('is-open');
  loginInput.style.borderColor = '';
}


function autorized() {

  function logOut() {
    login = null;
    localStorage.removeItem('gloDelivery')
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut)
    checkAuth();

  }


  console.log('Авторизован')

  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut)

}


function notAutorized() {
  console.log('Не авторизован');

  function logIn(event) {
    event.preventDefault();
    if(loginInput.value) {
    login = loginInput.value;
    localStorage.setItem('gloDelivery', login);
    toogleModalAuth();
    buttonAuth.removeEventListener('click', toogleModalAuth);
    closeAuth.removeEventListener('click', toogleModalAuth);
    loginForm.removeEventListener('submit', logIn);
    loginForm.reset();
    checkAuth();
    } else {
    loginInput.style.borderColor = 'red';
    alert('Не введен логин');
    }
  }
   
    buttonAuth.addEventListener('click', toogleModalAuth);
    closeAuth.addEventListener('click', toogleModalAuth);
    loginForm.addEventListener('submit', logIn);
  
}

function checkAuth() {
  if(login) {
    autorized();
  } else {
    notAutorized();
  }
}

checkAuth();




