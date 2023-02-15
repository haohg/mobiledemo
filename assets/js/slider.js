window.onload = function () {
  // KICH 
  const sliders = document.querySelectorAll('.slider-left__item');
  const sliderTitles = document.querySelectorAll('.slider-left__title');
  let indexSliderItem = 0;

  // THÊM SỰ KIỆN VÀO TỪNG NÚT BẤM BÊN DƯỚI SLIDER
  sliderTitles.forEach( (sliderTitle, indexCurrent) => {
    sliderTitle.addEventListener('click', function (e) {
      e.preventDefault();
      selectedTitle(sliderTitles, 'slider-left__title--selected', this);
      swithBanner(indexCurrent, sliders);
      indexSliderItem = indexCurrent;
    });
  });

  // THÊM STYLE RIÊNG CHO TỪNG TITLE ĐƯỢC CHỌN
  function selectedTitle(arr, className, target) {
    arr.forEach(element => {
      element.classList.remove(className);
    });
    target.classList.add(className);
  }

  // HÀM DÙNG ĐỂ CHUYỂN ĐỔI CÁC SLIDER
  function swithBanner(position, sliders){
    if(position >= sliders.length){
      position = 0;
    }

    sliders.forEach((slider)=>{
      slider.style.transform = `translateX(-${position*100}%)`;
    })
    selectedTitle(sliderTitles, 'slider-left__title--selected', sliderTitles[position]);
    indexSliderItem++;
  }

  let interval = setInterval(() => {
    swithBanner(indexSliderItem, sliders);
  }, 3000)
};
