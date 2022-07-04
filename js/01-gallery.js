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
    <div class="modal">
    <img src='${event.target.dataset.source}'
    />
    </div>`
      
    );
    instance.show();
    
    addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            instance.close();
        };
    });
    const closeByClick = document.querySelector('.modal');
    closeByClick.addEventListener('click', () => instance.close())
    
};


