const modalButton=document.querySelector(".hotel-search"),hideForm=document.querySelector(".hide-form"),arriveForm=document.querySelector(".text"),modalForm=document.querySelector(".search-wrapper"),formAnchor=document.querySelector(".form-anchor");modalButton.addEventListener("click",(function(){hideForm.classList.toggle("hide-form"),arriveForm.focus()})),modalForm.addEventListener("submit",(function(e){arriveForm.value&&outForm.value||e.preventDefault()}));