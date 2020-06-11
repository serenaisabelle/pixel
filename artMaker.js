window.onload = function(){
    // Create the thing to hold our 400 elements.
    let canvas = document.querySelector('#canvas');
    let pixel;
    let paint;
    let selectedColor = "black";
    let colors = ['#F00000','#0000FF','#FFFF00','#CC0066','#000000','#FFFFFF','#40E0D0','#a991c3','#FFE458','#420420','#ff7373','#FF9158']
    let palette = document.querySelector('#palette');

    function changeSelected (event){
        selectedColor = event.target.style.backgroundColor
    }
    for (let i=0; i<colors.length; i++){
        paint = document.createElement('span')
        paint.style.backgroundColor = colors[i]
        paint.addEventListener('click', changeSelected)
        palette.appendChild(paint)
    }
    // Set the hieght, width, and background color of our container
    // center it horizontally with margin = auto
    // and use grid layout to make the boxes nice.

    function changeColor (event) {
        event.target.style.backgroundColor = selectedColor;

    }

    
    for(let i = 0; i < 400; i++) {
        pixel = document.createElement('span');
        pixel.classList.add('pixel')
       canvas.appendChild(pixel);
       pixel.addEventListener('click', changeColor)
  
      }
}
   
    
    