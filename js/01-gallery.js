import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item">
<a class="gallery__link" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
  />
</a>
</li>`
  )
  .join("");

galleryEl.innerHTML = galleryMarkup;

const instance = basicLightbox.create(`<div class="modal"><img src="" width="1040" height="600"></div>`, {
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

console.log(galleryItems);