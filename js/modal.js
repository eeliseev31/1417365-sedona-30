const modalButton = document.querySelector(".hotel-search");
const hideForm = document.querySelector(".hide-form");
const arriveForm = document.querySelector(".text");
const modalForm = document.querySelector(".search-wrapper");
const formAnchor = document.querySelector(".form-anchor")

modalButton.addEventListener("click", function () {
  hideForm.classList.toggle("hide-form");
  arriveForm.focus();
});

modalForm.addEventListener("submit", function (evt) {
    if (!arriveForm.value || !outForm.value)
    evt.preventDefault()
});




