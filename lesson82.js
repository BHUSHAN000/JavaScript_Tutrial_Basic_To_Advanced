

//     // <div class="outerClass1">
//     //   <div class="childDiv">Hi</div>
//     // </div>
//     // <div class="outerClass2">
      
// // </div>
    
// // first target the cloning element

// const HiElement = document.querySelector('.childDiv');

// // clone the node

// const clonedElement = HiElement.cloneNode(true);

// console.log(clonedElement);

// // target the parent element where you want to append the cloned element

// const outerClass2 = document.querySelector('.outerClass2');

// // append the cloned element to the parent element
// outerClass2.appendChild(clonedElement);

    // <div class="outerClass">
    //   <div class="innerClass">
    //     <div class="childDiv" id="AElement">A</div>
    //     <div class="childDiv" id="BElement">B</div>
    //     <div class="childDiv" id="CElement">C</div>
    //     <div class="childDiv" id="DElement">D</div>
    //   </div>
    // </div>
    // <div id="newdiv">

// </div>
    
// 1. first target the cloning element

const InnerClassEle = document.querySelector('.innerClass');

//2. clone the node

const clonedElement = InnerClassEle.cloneNode(true);
console.log(clonedElement);

//3. target the parent element where you want to append the cloned element

const newDiv = document.querySelector('#newdiv');
newDiv.appendChild(clonedElement);
