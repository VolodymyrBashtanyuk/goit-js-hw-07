import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const createGalleryListItem = document.querySelector('.gallery');

const galleryList = createGalleryList(galleryItems);
console.log(galleryList);

createGalleryListItem.insertAdjacentHTML('beforeend', galleryList);




function createGalleryList(itemList) {
    return itemList.map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}">
    <img
      loading = 'lazy'
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
    }).join(' ');
    // return images;
};
 

