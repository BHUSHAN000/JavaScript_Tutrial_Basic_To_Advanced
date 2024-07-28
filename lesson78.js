/*
<div class="outerClass">
  <div class="innerClass">
    <div class="childDiv" id="EElement">E</div>;
    <div class="childDiv" id="AElement">A</div>
    <div class="childDiv" id="BElement">B</div>
    <div class="childDiv" id="CElement">C</div>
    <div class="childDiv" id="DElement">D</div>
  </div>
</div>
*/

// insertBefore() method =>
// syntax: targetNode.insertBefore(newNode, beforeNode);

// targetNode => The parent of the newly inserted node.
const parentElement = document.querySelector('.innerClass');


// newNode => The node to insert.
const newElement = document.createElement('div');
const textNode = document.createTextNode('E');

newElement.appendChild(textNode);

newElement.classList.add('childDiv');
newElement.setAttribute('id', 'EElement');
console.log(newElement);


// beforeNode => The node before which new node is inserted.
// const AElement = document.querySelector('#AElement');

// parentElement.insertBefore(newElement, AElement);

const CElement = document.querySelector('#CElement');

parentElement.insertBefore(newElement, CElement);
