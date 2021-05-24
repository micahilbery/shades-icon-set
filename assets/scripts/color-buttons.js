const colorBtns = document.getElementsByName("color-btns");
const iconPanel = document.getElementById('icon-panel');
let currentVal;

function setColor() {
  if(currentVal) {
    iconPanel.classList.remove(currentVal); // Remove previously selected color
  }

  for (var i = 0; i < colorBtns.length; i++) {
    if (colorBtns[i].checked) {
      currentVal = colorBtns[i].value; // Find checked value.
    }
  }

  iconPanel.classList.add(currentVal); // Set color to currently selected color
}

for (var i = 0; i < colorBtns.length; i++) {
  colorBtns[i].addEventListener('change', setColor);
}


const colorBtnsContainer = document.getElementById('color-buttons');
colorBtnsContainer.style.display = "grid"; // shows buttons if javascript is enabled;
