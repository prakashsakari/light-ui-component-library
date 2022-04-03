let cardBody = document.querySelector(".card-body");
let openModalBtn = document.querySelector(".open-modal-btn");  
let saveBtn = document.querySelector(".save"); 
let cancelBtn = document.querySelector(".cancel"); 

function closeModal() {
    cardBody.style.display = "none";
    openModalBtn.style.display = "block";
}

function openModal(){
    cardBody.style.display = "block";
    openModalBtn.style.display = "none";
}

openModalBtn.addEventListener("click", openModal);
saveBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);