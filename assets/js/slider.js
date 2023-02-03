window.onload = function(){
    let items = document.querySelectorAll('.slider-item');
    let index = 1;
    function moveElement(){
      if(index === items.length){
        index = 0;
      }
      items.forEach(function(item){
          item.style.transform = `translateX(-${index*100}%)`;
      });
      index++;
    }
    
    setInterval(moveElement, 3000);
    console.log(items);
};
