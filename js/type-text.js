const paragraph = document.querySelector('.hero-section_title-span');



const textTyping = {
  firstText: 'Are you looking for a Product Designer?',
  secondText: 'Super Designer?',
  thirdText: 'Do you super?',

  start() {
    paragraph.textContent = this.firstText;
    this.delFirst();
  },

  delFirst() {
    let count = this.firstText.length;
    setTimeout(() => {
      let intervalId = setInterval(() => {
        // console.log(111);

        paragraph.textContent = paragraph.textContent.slice(0, count);
        count -= 1;
        // console.log(222);
        if (paragraph.textContent.length === 20) {
          clearInterval(intervalId);
          this.addSecond();
        }



      }, 150)

    }, 1000)
  },

  addSecond() {
    let count = 0;
    paragraph.textContent = paragraph.textContent.slice(0, -1) + ' ';
    setTimeout(() => {
      let intervalId = setInterval(() => {
        // console.log('add111');


        paragraph.textContent = paragraph.textContent + this.secondText.slice(count, count + 1);

        count += 1;
        // console.log(Date.now(), 'add222');
        if (this.secondText.length === count) {
          clearInterval(intervalId);
          this.delAll();
        }



      }, 150)



    }, 1000)
    // paragraph.textContent = paragraph.textContent + '_';
  },

  delAll() {
    let count = paragraph.textContent.length;
    setTimeout(() => {
      let intervalId = setInterval(() => {
        // console.log(111);

        paragraph.textContent = paragraph.textContent.slice(0, count);
        count -= 1;
        // console.log(Date.now(), 'add333');
        if (paragraph.textContent.length === 0) {
          clearInterval(intervalId);
          this.addThird();
        }



      }, 150)
    }, 1000)


  },

  addThird() {
    let count = 0;
    // paragraph.textContent = '';
    setTimeout(() => {
      let intervalId = setInterval(() => {
        // console.log('add111');

        // console.log(this.secondText.slice(0, count));
        paragraph.textContent = this.thirdText.slice(0, count);

        count += 1;
        // console.log(Date.now(), 'add222');
        if (this.thirdText.length === count - 1) {
          clearInterval(intervalId);
          this.delThird();
        }



      }, 150)

    }, 1000)
  },

  delThird() {
    let count = paragraph.textContent.length;
    setTimeout(() => {
      let intervalId = setInterval(() => {
        // console.log(111);

        paragraph.textContent = paragraph.textContent.slice(0, count);
        count -= 1;
        console.log(Date.now(), 'add333');
        if (paragraph.textContent.length === 0) {
          clearInterval(intervalId);
          this.addFirst();
        }



      }, 150)
    }, 1000)


  },

  addFirst() {
    let count = 0;
    setTimeout(() => {
      let intervalId = setInterval(() => {
        console.log('add111');

        // console.log(this.secondText.slice(0, count));
        paragraph.textContent = this.firstText.slice(0, count);

        count += 1;
        console.log(Date.now(), 'add222');
        if (this.firstText.length === count - 1) {
          clearInterval(intervalId);
          this.delFirst();
        }



      }, 150)

    }, 1000)
  },

};


textTyping.start()


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// setInterval(() => {
//   console.log(getRandomInt(500));
// }, 500)