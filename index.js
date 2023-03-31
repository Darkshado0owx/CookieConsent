const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const loginForm = document.getElementById('login-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

declineBtn.addEventListener('mouseenter', function() {
      modalChoiceBtns.classList.toggle('modal-choice-btns-reverse')
})

setTimeout(function() {
   modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function() {
   modal.style.display = 'none'
})

loginForm.addEventListener('cancel', function() {

})

loginForm.addEventListener('submit', function(e) {
   e.preventDefault()

   const loginFormData = new FormData(loginForm)
   const name = loginFormData.get('userName')

   modalText.innerHTML = `
   <div class="modal-inner-loading">
      <img src="images/loading.svg" class="loading">
      <p id="upload-text">
         Uploading your data to the dark web...
      </p>
   </div>`

   setTimeout(function() {
      document.getElementById('upload-text').innerText = `Making the sale...`
   }, 1500)

   setTimeout(function() {
      modalCloseBtn.disabled = false
      document.getElementById('modal-inner').innerHTML = `
      <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
      <p>We just sold the rights to your eternal soul.</p>
      <div class="idiot-gif">
         <img src="images/pirate.gif">
      </div>`
   }, 3000)
})

