//target to google button

const googleBtnEle = document.querySelector("#googleBtn");
// console.log(googleBtnEle);

//add event listener
googleBtnEle.addEventListener("click", function () {
  // console.log('Google button clicked');
  const referenceId = window.open(
    "https://www.google.com",
    "_blank",
    "width=500,height=500,top=100,left=500"
    );
    console.log(referenceId);
    // referenceId.moveTo(100,500)
    referenceId.moveBy(100,500)
});


// moveTo(x,y): Moves the window to the specified coordinates (x,y) on the screen.
// moveBy(x,y): Moves the window by the specified number of pixels.
// newTop = currentTop + y
// newLeft = currentLeft + x
