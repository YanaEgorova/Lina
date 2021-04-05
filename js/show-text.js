const invisibleText = document.querySelector('.about-section_text-block-invisible');
const dots = document.querySelector('.dots');
const textBtn = document.querySelector('.about-section_open-btn');
const textPadding = document.querySelector('.about-section_text-mb');

textBtn.addEventListener('click', showText)


function showText() {
  invisibleText.style.maxHeight = invisibleText.scrollHeight + 'px';
  textBtn.style.display = 'none';
  dots.style.display = 'none';
  textPadding.style.marginBottom = '2rem';
}