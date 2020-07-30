window.onload = function () {
    createColorPallet(colors);
    pixelsOfBoard(number);
  };
  
  let selectedColor = 'black';
  let colors = ["black", "rgb(30,144,255)", "rgb(0,255,127)", "rgb(148,0,211)"];
  let number = 5;
  let pixelBoardDiv = document.querySelector('#pixel-board');
  let btn = document.querySelector('#clear-board');
  let pixel = document.getElementsByClassName('pixel');
  
  function createColorPallet(colors) {
    let colorPalletContainer = document.getElementById('color-palette');
    for (let index in colors) {
      let palletItemDiv = createPalletItem(colors[index]);
      colorPalletContainer.appendChild(palletItemDiv);
    }
  };
  
  function createPalletItem(color) {
    let palletItemDiv = document.createElement('div');
    palletItemDiv.style.backgroundColor = color;
    palletItemDiv.className = 'color';
    palletItemDiv.addEventListener('click', handlePalletItemEvent);
    if (color === 'black') {
      palletItemDiv.classList.add('selected');
    }
    return palletItemDiv;
  };
  
  function handlePalletItemEvent(event) {
    let oldSelectedDiv = document.querySelector('.selected');
    let currentSelectedDiv = event.target;
    oldSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classList.add('selected');
    selectedColor = currentSelectedDiv.style.backgroundColor;
  };
  
  pixelBoardDiv.addEventListener('click', handlePixelClick)
  function handlePixelClick(event) {
    let selectedPixelDiv = event.target;
    selectedPixelDiv.style.backgroundColor = selectedColor;
  };
  
  btn.addEventListener("click", function () {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = "white";
    }
  })
  
  function pixelsOfBoard (number) {
    let boardPixel = document.getElementById('pixel-board');
    for (let index = 1; index <= number; index +=1) {
      let colunm = document.createElement('div');
      colunm.className = 'pixel-extern';
      boardPixel.appendChild(colunm);
      for (let jindex = 1; jindex <= number; jindex +=1) {
        let line = document.createElement('div');
        line.className = 'pixel';
        colunm.appendChild(line);
      }
    }
  };