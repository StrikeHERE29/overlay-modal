let openModal = document.querySelector(".open-modal");
let closeBtn = document.querySelector(".close-btn");
let modalOverlay = document.querySelector(".modal-overlay");

openModal.addEventListener("click", function(){
    modalOverlay.style.visibility = "visible";
    modalOverlay.style.zIndex = "10";
    document.body.appendChild(overlay);
})

closeBtn.addEventListener("click", function(){
    modalOverlay.style.visibility = "hidden";
    modalOverlay.style.zIndex = "-10";
    document.body.removeChild(overlay);
})

let overlay = document.createElement("div");

overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 255, 0.3)'; 
overlay.style.zIndex = '1';

