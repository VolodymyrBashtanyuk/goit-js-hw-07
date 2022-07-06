import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryItemList = document.querySelector('.gallery');

const galleryListFunction = createGalleryList(galleryItems);
galleryItemList.insertAdjacentHTML('beforeend', galleryListFunction);

galleryItemList.addEventListener('click', onGalleryModalOpenClose);

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
};

function onGalleryModalOpenClose(event) {
    event.preventDefault();
    const isImagesClickEl = event.target.classList.contains('gallery__image');
    if (!isImagesClickEl) {
        return;
    };
    const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}'
    />` 
    );

    instance.show();
    

    const CloseByEscape = function  (event) {
        if (event.code === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', CloseByEscape);
         };
      };
    
    document.addEventListener('keydown', CloseByEscape);    
};

 