'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModel = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // to select all the btns with same name
// console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (
  let i = 0;
  i < btnsOpenModal.length;
  i++ // no braces required if only need toe execute one statement
)
  console.log(btnsOpenModal[i].addEventListener('click', openModal));
// modal.style.display = 'block'; /// It would be pain in the ass following this approach as the would be lengthy as if the class has many prooperties

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModel.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (r) {
  console.log(r.key);
  if (r.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
