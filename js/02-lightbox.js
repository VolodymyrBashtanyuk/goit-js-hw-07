import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemList = document.querySelector('.gallery');
const galleryList = createGalleryList(galleryItems);
galleryItemList.insertAdjacentHTML('beforeend', galleryList)


function createGalleryList(itemList) {
    return itemList.map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}">
    <img
      loading = 'lazy'
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
    </a>`;
    }).join(' ');
};

new SimpleLightbox( '.gallery a', {captionSelector: 'img', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

