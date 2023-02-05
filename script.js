let loader = document.querySelector('.loader-container');
let formOne = document.querySelector('.form-one');
let formTwo = document.querySelector('.form-two');
let buttonOne = document.querySelector('.button-one');
let form = document.querySelector('#form');
let submit = document.querySelector('#submit');

submit.addEventListener('click', function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  form.reset();
  formOne.classList.remove('hide');
  formTwo.classList.add('hide');
});

let showNextForm = (event) => {
  formOne.classList.add('hide');
  loader.classList.remove('hide');
  let n = setTimeout(() => {
    loader.classList.add('hide');
    formTwo.classList.remove('hide');
    clearTimeout(n);
  }, 1000);
};

buttonOne.addEventListener('click', showNextForm);
