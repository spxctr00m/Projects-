const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');
let count = 0; 

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
} 
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
const clickAndHold = (btnEl) => {
    let timerId;
    const DURATION = 200;
  
    //handle when clicking down
    const onMouseDown = () => {
      timerId = setInterval(() => {
        btnEl && btnEl.click();
      }, DURATION);
    };
  
    //stop or clear interval
    const clearTimer = () => {
      timerId && clearInterval(timerId);
    };
  
    //handle when mouse is clicked
    btnEl.addEventListener("mousedown", onMouseDown);
    //handle when mouse is raised
    btnEl.addEventListener("mouseup", clearTimer);
    //handle mouse leaving the clicked button
    btnEl.addEventListener("mouseout", clearTimer);
  
    // a callback function to remove listeners useful in libs like react
    // when component or element is unmounted
    return () => {
      btnEl.removeEventListener("mousedown", onMouseDown);
      btnEl.removeEventListener("mouseup", clearTimer);
      btnEl.removeEventListener("mouseout", clearTimer);
    };
  };
  
  
  //onMount
  document.addEventListener("DOMContentLoaded", function () {
    clickAndHold(increaseBtn);
    clickAndHold(decreaseBtn);
  });