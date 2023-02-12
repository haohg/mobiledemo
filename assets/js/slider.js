window.onload = function () {
  const sliderItems = document.querySelectorAll('.slider-left__item');
  const sliderTitles = document.querySelectorAll('.slider-left__title');
  let bannerIndex = 0;

  sliderTitles.forEach( (sliderTitle, indexCurrent) => {
    sliderTitle.addEventListener('click', function (e) {
      e.preventDefault();
      removeClassList(sliderTitles, 'slider-left__title--selected');
      this.classList.add('slider-left__title--selected');
      moveBanner(indexCurrent);
      bannerIndex = indexCurrent;

    });
  });

  function removeClassList(arr, className) {
    arr.forEach(element => {
      element.classList.remove(className);
    });
  }

  function moveBanner(position){
    sliderItems.forEach( (item) => {
        item.style.transform = `translateX(-${position*100}%)`;
    });
    removeClassList(sliderTitles, 'slider-left__title--selected');
    sliderTitles[position].classList.add('slider-left__title--selected');
    bannerIndex++;
    if(position >= sliderItems.length - 1){
      bannerIndex = 0;
    }
  }

  let interval = setInterval(() => {
    moveBanner(bannerIndex);
  }, 3000)
};
