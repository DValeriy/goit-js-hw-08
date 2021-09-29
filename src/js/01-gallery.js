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

let galleryListEl = galleryItems.map(item =>
`<div class="gallery__item">
<a class="gallery__link" href='${item.original}''>
  <img
    class="gallery__image"
    src='${item.preview}'
    data-source='${item.original}'
    alt='${item.description}'
  />
</a>
</div>`
).join("");

galleryNode.insertAdjacentHTML("beforeend", galleryListEl)
let instance;

const handler = e => {
  if (e.key === "Escape") { instance.close(); console.log("Escape") }
  else(console.log("hoW"))
}
  
galleryNode.addEventListener("click", e => {
  if (e.target.tagName !== "IMG") { return  };
  e.preventDefault();

  // 1 method
  let linkImg = e.target.dataset.source;  
  instance = basicLightbox.create(`<img src='${linkImg}'  width="800" height="600">`,
  //false  true для closable щоб бачити спрацювання для keydown
    { closable: true,
      onShow: (instance) => { document.addEventListener("keydown", handler) },
      onClose: (instance) => { document.removeEventListener("keydown", handler) }
    })
  
  instance.show()
  console.log(instance.show())
  })