let cardBody = document.querySelector(".card-body");
let openModalBtn = document.querySelector(".open-modal-btn"); 
let closeBtn = document.querySelector(".close-btn"); 
let modalBtn = document.querySelectorAll(".modal-btn"); 

function closeModal() {
    cardBody.style.display = "none";
    openModalBtn.style.display = "block";
}

function openModal(){
    cardBody.style.display = "block";
    openModalBtn.style.display = "none";
}

openModalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

for (let button of modalBtn){
    button.addEventListener("click", closeModal);
}