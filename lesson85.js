
//target to google button

const googleBtnEle = document.querySelector("#googleBtn");
// console.log(googleBtnEle);

//add event listener
googleBtnEle.addEventListener('click', function () { 
  // console.log('Google button clicked');
  window.open('https://www.google.com',"_blank","width=500,height=500,top=100,left=500");
})


// syntax

// window.open(URL, target, windowFeatures);
/**
 * URL (optional): A string representing the URL of the resource you want to open.
 * target (optional): A string representing the target attribute of the new window.
 *  it consist of 4 values: _blank (default), _self, _parent, _top
 * _blank: Opens the linked document in a new window or tab
 * _self: Opens the linked document in the same frame as it was clicked (this is default)
 * windowFeatures (optional): A string containing a comma-separated list of window features given with their values.
 */
