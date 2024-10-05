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

  // referenceId.resizeTo(200,200)
  referenceId.resizeBy(200,300)
});


// resizeTo(width, height): Resizes the window to the specified width and height.
// resizeBy(width, height): Resizes the window by the specified number of pixels.
// newWidth = currentWidth + width = 500 + 200 = 700
// newHeight = currentHeight + height = 500 + 300 = 800
