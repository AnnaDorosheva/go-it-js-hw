"use strict";

import galleryAll from "./gallery-items.js";

const refs = {
  ulForGallery: document.querySelector(".gallery"),
  modalWindow: document.querySelector("div.lightbox"),
  bigImg: document.querySelector(".lightbox___image"),
  clouseModalButton: document.querySelector(
    'button[data-action="close-lightbox"]'
  ),
  divOverley: document.querySelector(".js-overlay")
};

// создаем шаблон одной карточки с изображением:
function createItem({ original, preview, description }) {
  const card = `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
    </li>`;
  return card;
}

// вставляем в шаблон все карточки из массива обьектов галлереи через map
const createCollection = galleryAll.map(item => createItem(item)).join("");

// и готовые карточки вставляем в ul
refs.ulForGallery.insertAdjacentHTML("afterBegin", createCollection);

// вешаем слушателя
refs.ulForGallery.addEventListener("click", openModal);
refs.clouseModalButton.addEventListener("click", closeModal);
refs.divOverley.addEventListener("click", closeOverlay);

// пишем функцию открытия модального окна
function openModal(event) {
  if (event.target !== event.currentTarget) {
    event.preventDefault();
    refs.modalWindow.classList.add("is-open");
    const altImg = event.target.alt;
    const dataImg = event.target.dataset.source;
    refs.bigImg.src = dataImg;
    refs.bigImg.setAttribute("alt", altImg);
    window.addEventListener("keydown", handleKeyPress);
  }
};

// пишем функции закрылия модального окна
function closeModal() {
  refs.modalWindow.classList.remove("is-open");
  window.removeEventListener("keydown", handleKeyPress);
  refs.bigImg.src = "";
};

function handleKeyPress(e) {
  if (e.code !== "Escape") {
    return;
  }
  closeModal();
};

function closeOverlay(event) {
  if (event.target !== refs.bigImg) {
    closeModal();
  }
};
