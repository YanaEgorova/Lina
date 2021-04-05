const showItemsBtn = document.querySelector('#showItemsBtn--js');
const el = document.querySelector('#element--js');
const invisibleList = document.querySelector('#elementContent--js');
const activeClass = "active";

showItemsBtn.addEventListener('click', showInvisibleList);
// let listToggle = true;

function showInvisibleList(event) {
  el.classList.toggle(activeClass);
  invisibleList.style.setProperty("--height", `${invisibleList.scrollHeight}px`);

  // event.target.textContent === "Показать текст" ?
  //   (event.target.textContent = "Cкрыть текст") :
  //   (event.target.textContent = "Показать текст");
}



// button.addEventListener("click", function (event) {
//   content.classList.toggle(activeClass);
//   content.style.setProperty("--height", `${content.scrollHeight}px`);


//   event.target.textContent === "Показать текст" ?
//     (event.target.textContent = "Cкрыть текст") :
//     (event.target.textContent = "Показать текст");
// });