const array = ["Lina Artista", "Animation", "Illustration", "UI / UX Design"];

function setClick() {
  let allImages = [...document.querySelectorAll('.js_slide--active .slider_img-sm')];
  allImages.map(image => {
    image.addEventListener('click', changeBigImage);
  })
}

setClick()

class Live {
  constructor({
    arrayWords,
    elSlider,
    contBtns,
    printTeg
  }) {
    this.slider = document.querySelector(`${elSlider}`);
    this.contBtns = document.querySelector(`${contBtns}`);
    this.printTeg = document.querySelector(`${printTeg}`);

    this.arrayWords = arrayWords;
    this.idInt = null;
    this.isFirstLoad = true;
  }

  del(idx) {
    this.isFirstLoad = false;
    let count = this.arrayWords[idx].length;

    return new Promise((res) => {
      this.idInt = setInterval(() => {
        count -= 1;
        let nowText = this.arrayWords[idx].slice(0, count);
        this.print(nowText);

        if (nowText.length === 1) {
          this.clearInt();
          res();
        }
      }, 500);
    });
  }

  add(idx) {

    let count = 0;
    let nowText = "";

    return new Promise((res) => {
      this.idInt = setInterval(() => {

        nowText += this.arrayWords[idx][count];
        count += 1;
        this.print(nowText);


        if (nowText.length === this.arrayWords[idx].length) {

          this.clearInt();
          res(this.del(idx));
        }
      }, 500);
    });
  }

  print(text) {
    this.printTeg.textContent = text;
  }

  clearInt() {
    clearInterval(this.idInt);
  }
}

const live = new Live({
  arrayWords: array,
  elSlider: ".js_siema",
  contBtns: ".js_cont_button",
  printTeg: ".js_text_show_siema",
});

const btnContainer = document.querySelector('.js_cont_button');

const mySiema = new Siema({
  selector: ".siema",
  duration: 100,
  easing: "ease-out",
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: printSlideIndex,
  onChange: printSlideIndex,
});


function printSlideIndex() {
  const idx = this.currentSlide;
  // console.log('idx: ', idx);
  const activeSlide = document.querySelector('.js_slide--active');
  if (activeSlide) {
    activeSlide.classList.remove('js_slide--active');
  }
  if (idx === 3) {
    const slides = document.querySelectorAll(`.js_slide[data-id="${idx}"]`);
    // console.log('slides: ', slides[1]);
    // slides.forEach(slide => {
    slides[1].classList.add('js_slide--active')
    // })
  } else {
    const slide = document.querySelector(`.js_slide[data-id="${idx}"]`);
    // console.log('slide: ', slide);
    slide.classList.add('js_slide--active')
  }

  live.clearInt();
  const sliderBtn = btnContainer.querySelector(`.slider-btn[data-idx="${idx}"]`);

  const activeBtn = btnContainer.querySelector('.slider-btn--active');
  if (activeBtn) {
    activeBtn.classList.remove('slider-btn--active');
  }
  sliderBtn.classList.add('slider-btn--active');
  if (idx === 0 && live.isFirstLoad) {

    live.del(idx).then(() => {
      mySiema.next();
      setClick()
    });
    return;
  }
  live.print("");
  live.add(idx).then(() => {
    mySiema.next()
    setClick()
  });
}


live.contBtns.addEventListener("click", handleClickSiema);


function handleClickSiema(e) {
  // console.log('now');
  if (e.target.nodeName !== "BUTTON") return;
  const idx = Number(e.target.dataset.idx);
  mySiema.goTo(idx);
  setClick()
  const activeBtn = btnContainer.querySelector('.slider-btn--active');
  if (activeBtn) {
    activeBtn.classList.remove('slider-btn--active');
  }
  e.target.classList.add('slider-btn--active');
}

function changeBigImage(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  let bigImage = document.querySelector('.js_slide--active .js-slider_img');
  const srcClickedImgSm = e.target.getAttribute('data-sm-src');
  const srcClickedImgBg = e.target.getAttribute('data-bg-src');
  const srcBigImgSm = bigImage.getAttribute('data-sm-src');
  const srcBigImgBg = bigImage.getAttribute('data-bg-src');

  e.target.setAttribute('src', srcBigImgSm);
  bigImage.setAttribute('src', srcClickedImgBg);
  bigImage.setAttribute('data-bg-src', srcClickedImgBg);
  bigImage.setAttribute('data-sm-src', srcClickedImgSm);
  e.target.setAttribute('data-sm-src', srcBigImgSm);
  e.target.setAttribute('data-bg-src', srcBigImgBg);
}