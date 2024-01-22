const modal = document.querySelector(".modal");
const subscribeButton = document.querySelector(".button_subscribe");
const byeButton = document.querySelector(".modal_button");
const form = document.querySelector(".form_submit");
function openModal(){
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();
});

subscribeButton.addEventListener('click', openModal);
byeButton.addEventListener('click', closeModal);


