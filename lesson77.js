
// 1. createElement => create a new element

// const divEle = document.createElement('div');
// // console.log(divEle);
// // divEle.textContent = 'This is a new div element';
// // divEle.innerText = 'This is a new div element';
// // divEle.innerHTML = 'This is a new div element';

// // 2. createTextNode => create a text node

// const textNode = document.createTextNode('This is a text node');
// // console.log(textNode);
// // 3. createComment => create a comment node

// const commentNode = document.createComment('This is a comment node');
// // console.log(commentNode);

// // appendChild => append a child to a parent
// // syntax: parent.appendChild(child);

// divEle.appendChild(textNode);
// console.log(divEle);


// <p><span>Hello</span></p>

// const spanEle = document.createElement('span');
// const paraEle = document.createElement('p');

// const textNode = document.createTextNode('Hello');
// spanEle.appendChild(textNode);
// console.log(spanEle);

// paraEle.appendChild(spanEle);
// console.log(paraEle);

//<div class="innerClass">
  //<div class="childDiv">A</div>
  //<div class="childDiv">B</div>
  //<div class="childDiv">C</div>
  //<div class="childDiv">D</div>
  //<div class="childDiv">E</div>
//</div>

const parentDiv = document.querySelector('.innerClass');

const EDiv = document.createElement('div');
const textNode = document.createTextNode('E');

EDiv.appendChild(textNode);
EDiv.classList.add('childDiv');
console.log(EDiv);

parentDiv.appendChild(EDiv);
