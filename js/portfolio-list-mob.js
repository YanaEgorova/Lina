'use strict';
import galleryItems from './portfolio-items.js';

const myGallery = document.querySelector('.js-gallery-mob');

function createGallery(items) {
  return items
    .map(({
      original,
      name
    }) => {
      return `
   
  <li class="animation-section_item">
  <a href="./animationElementPages/${changeName(name)}.html" class="animation-section_link">
    <div class="animation-section_img-block">
      <div class="animation-section_overlay"></div>
      <svg class="animation-section_img-block--svg" xmlns="http://www.w3.org/2000/svg" width="26" height="15"
        viewbox="0 0 26 15">
        <path
          d="M17.994 1.42v12.16c0 .793-.62 1.42-1.404 1.42H1.403C.62 15 0 14.373 0 13.58V1.42C0 .628.619 0 1.403 0H16.59c.785 0 1.404.669 1.404 1.42zm7.304.335c-.123 0-.247.042-.371.083l-5.241 3.05v5.223l5.241 3.092c.124.084.248.084.371.084.207 0 .372-.084.496-.209.165-.125.206-.334.206-.543V2.465c0-.376-.33-.71-.702-.71z" />
      </svg>
      <svg class="animation-section_img-block--svg2" xmlns="http://www.w3.org/2000/svg" width="27" height="27"
        viewbox="0 0 27 27">
        <g>
          <path
            d="M26.357 24.01l-7.067-7.067c-.619.918-1.418 1.7-2.349 2.3l7.091 7.09c.642.641 1.682.64 2.323 0 .641-.642.642-1.682.002-2.324zM17.914 15.251c2.789-4.159 1.98-9.753-1.87-12.953-3.852-3.2-9.5-2.97-13.078.535C-.61 6.336-.96 11.978 2.16 15.896c3.119 3.917 8.695 4.841 12.911 2.14 1.127-.726 2.094-1.674 2.843-2.785zm-4.521 1.105c-3.289 1.807-7.407.904-9.637-2.113-2.231-3.017-1.888-7.218.803-9.833 2.691-2.614 6.901-2.837 9.852-.52 2.952 2.317 3.736 6.459 1.835 9.694-.681 1.166-1.668 2.125-2.853 2.772z" />
        </g>
      </svg>
      <img class="animation-section_img animation-section_img-mob" src="${original}"   alt="responsive image">
      
    </div>
    <span class="animation-section_span">${name}</span>
  </a>
</li>
  `;
    })
    .join('');
}

function changeName(name) {
  return name.split(' ').join('').toLowerCase();

}

myGallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));