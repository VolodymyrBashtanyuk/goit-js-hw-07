import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryItemList = document.querySelector('.gallery');
const galleryList = createGalleryList(galleryItems);
galleryItemList.insertAdjacentHTML('beforeend', galleryList)

// console.log(galleryList)
function createGalleryList(itemList) {
    return itemList.map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}">
    <img
      loading = 'lazy'
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      title = "${description}"
    />
    </a>`;
    }).join(' ');
};



let galleryShowModal = new SimpleLightbox('.gallery a');
galleryShowModal.on('show.simplelightbox', onGalleryShowModal);

function onGalleryShowModal(event) {
    event.preventDefault();
}
