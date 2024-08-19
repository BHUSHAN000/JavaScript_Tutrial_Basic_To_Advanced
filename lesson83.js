/*
<div class="outerClass">
  <div class="innerClass">
    <div class="childDiv" id="AElement">A</div>
    <div class="childDiv" id="BElement">B</div>
    <div class="childDiv" id="CElement">C</div>
    <div class="childDiv" id="DElement">D</div>
  </div>
</div>

*/

// hasAttribute() method => check if an element has a specific attribute or not

const innerElement = document.querySelector('.innerClass');

console.log(innerElement.hasAttribute('id')); // false
console.log(innerElement.hasAttribute('class')); // true


// hasChildNodes() method => check if an element has child nodes or not

console.log(innerElement.hasChildNodes()); // true

const AElement = document.querySelector('#AElement');
console.log(AElement.childNodes)
console.log(AElement.hasChildNodes()); // true

const EElement = document.querySelector('#EElement');
console.log(EElement.childNodes);
console.log(EElement.hasChildNodes()); // false
