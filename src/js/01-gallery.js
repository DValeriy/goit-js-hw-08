// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const galleryNode=document.querySelector(".gallery")
const linkNode = document.querySelector(".gallery a")

const galleryListEl = galleryItems.map(item =>
`<a class="gallery__item" href='${item.original}''>
  <img
    class="gallery__image"
    src='${item.preview}'
    alt='${item.description}'
  />
</a>`
).join("");

galleryNode.insertAdjacentHTML("beforeend", galleryListEl)

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});