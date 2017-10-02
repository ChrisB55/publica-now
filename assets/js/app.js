//Currently this app.js manages only the modal functionality, which is done with vanilla js. 
var modal = document.getElementById('projectModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Event Listeners
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open modal and Close modal
function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}


function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}












