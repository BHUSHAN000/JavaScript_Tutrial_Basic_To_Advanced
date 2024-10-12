
// console.log(navigator.onLine)

  function copyToClipboard() {
      navigator.clipboard.writeText("Hello, World!")
      .then(() => {
        console.log('Text copied to clipboard');
      })
  }

  


  function readClipboardText() {
      navigator.clipboard.readText()
          .then((text) => { 
                console.log('Copied content: ', text);
          } )
  }



// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function (position) {
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
//   });
// }
