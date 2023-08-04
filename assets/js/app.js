/* Menu */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
};

window.onclick = function (event) {
  if (!event.target.matches('.button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* ScrollUp */
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/*EmailJS*/

/*Prendere elementi dal DOM*/
const contactForm = document.querySelector("#contact-form");
const submit = document.querySelector("#submit");
const nameInput = document.querySelector("#user_name");
const surnameInput = document.querySelector("#user_surname");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

/*Dati da EmailJS*/
const publicKey = "Wo0uKX14aKJiipEP2";
const serviceID = "service_1f4kblf";
const templateID = "template_2yyeuas";

/*Inizializzare EmailJs*/
emailjs.init(publicKey);

/*Aggiungere evento al modulo*/
contactForm.addEventListener("submit", e => {
  e.preventDefault();

  /*Prendere valori dagli input*/
  const inputFields = {
    name: nameInput.value,
    surname: surnameInput.value,
    email: emailInput.value,
    message: messageInput.value
  }

  /*Inviare mail */
  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      alert("Messaggio Inviato!!");

      /*Cancella tutti i campi input */
      nameInput.value = "";
      surnameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }, (error) => {

      /*Errore */
      alert("Oops, qualcosa è andato storto!!");
      submit.innerText = "Oops.."
    })
})
