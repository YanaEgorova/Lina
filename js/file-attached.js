'use strict';

const form = document.querySelector('.contacts-section_form');


form.addEventListener('submit', previewFile);

function previewFile() {
  // console.log(1111);
  // var preview = document.querySelector('img');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    // console.log('HERE: ', reader.result);
    // preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  }
  // else {
  //   preview.src = "";
  // }
}