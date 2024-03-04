let openModal = document.querySelector(".open-modal");
let closeBtn = document.querySelector(".close-btn");
let modalOverlay = document.querySelector(".modal-overlay");

openModal.addEventListener("click", function(){
    modalOverlay.style.visibility = "visible";
    modalOverlay.style.zIndex = "10";

})

closeBtn.addEventListener("click", function(){
    modalOverlay.style.visibility = "hidden";
    modalOverlay.style.zIndex = "-10";
})