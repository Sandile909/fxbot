var contact = document.querySelector('.contact');
var contactForm = document.querySelector('.contactForm');
var buyBot = document.querySelector('.buyBot');

buyBot.onclick = (e) =>{
contact.showModal()
}

contactForm.onsubmit = (e) =>{
setTimeout(5000, closeModal)
function closeModal(){
contact.close()
}
}