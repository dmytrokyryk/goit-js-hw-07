import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

galleryEl.innerHTML = galleryMarkup;

const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
  onShow: () => {
    document.addEventListener("keydown", onEscDown);
  },
  onClose: () => {
    document.removeEventListener("keydown", onEscDown);
  },
});

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance.element().querySelector("img").src = event.target.dataset.source;

  instance.show();
}

galleryEl.addEventListener("click", onImageClick);

function onEscDown(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}