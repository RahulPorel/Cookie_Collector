const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("cookie-form");
const modalText = document.getElementById("modal-text");
const acceptBtn = document.getElementById("acceptBtn");
const modelInnerHtml = document.getElementById("modal-inner");
const declineBtn = document.getElementById("decline-btn");
const modalReverseBtns = document.getElementById("modal-choice-btns");

setTimeout(() => {
  modal.style.display = "inline";
}, 2500);

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", () => {
  console.log("hover");
  modalReverseBtns.classList.toggle("reverse");
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("fullName");
  const fullEmail = consentFormData.get("fullEmail");
  const fullLocation = consentFormData.get("fullLocation");

  modalText.innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
    </div>`;

  setTimeout(() => {
    modalText.innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
        <p id="uploadText">
           Making the sale... 
        </p>
        </div>`;
  }, 2000);

  setTimeout(() => {
    modelInnerHtml.innerHTML = `  <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p>We just sold the rights of your email <span class="modal-display-name"> ${fullEmail} </span> with your currect location <span class="modal-display-name"> ${fullLocation} </span> to dark web for <span class="modal-display-name"> $800 </span></p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
  }, 2900);

  setTimeout(() => {
    modelInnerHtml.innerHTML = `
    <h2>We are now sending Hitman to your current Location to <span class="modal-display-name">EXECUTE </span> YOU</h2>
      <div class="modal-inner-loading">
      <div class="idiot-gif">
      <img src="images/shooting.gif">
  </div>
    <img src="images/loading.svg" class="loading">
        <p id="uploadText">
           Thanks For Your Valuable Time & Feedback, We Will Miss You for Sure. <br>   Have a nice day 🥸
        </p>
 
    `;
    modalCloseBtn.disabled = false;
  }, 7250);
});
