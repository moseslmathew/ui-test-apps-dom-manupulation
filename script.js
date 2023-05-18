setTimeout(() => {
  const buttons = document.querySelectorAll("[data-modal-id]");
  buttons.forEach((item) => {
    console.log("Buttons: "+item)
    item.addEventListener("click",() => {        
        const modalID=item.dataset.modalId        
        const element=document.getElementById(modalID)
        console.log("ModalID: "+modalID)
        console.log("Modal: "+element)
        element.className="show"        
        hide(element)
    })
  });
}, 1000);


function hide(elementidToSkip){
console.log("Element to skip Hiding: ",elementidToSkip.id)
const textNodes=document.querySelector('.text').children;
for(item of textNodes){    
    if(item.id!=elementidToSkip.id)   
    item.className="hide"    
    
}

}
