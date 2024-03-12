const scriptURL = 'https://script.google.com/macros/s/AKfycbxW0cZI_UOGaELTdPEPHExGR3sWD7yYSqMRp21FJUtmqJLDN4Swu-Z6sALeYpLWBo4/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Merci ! Votre formulaire a été soumis avec succès. Nous vous recontacterons."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})