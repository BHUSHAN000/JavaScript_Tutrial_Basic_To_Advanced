/*
    <div class="outerClass">
        <div class="innerClass">
            <div class="childDiv" id="AElement">A</div>
            <div class="childDiv" id="BElement">B</div>
            <div class="childDiv" id="CElement">C</div>
            <div class="childDiv" id="DElement">D</div>
        </div>
    </div>;
 */

// parentElement
const parentElement = document.querySelector('.innerClass');


// replaceChild() => replace a child element with a new element
// syntax: parentElement.replaceChild(newElement, oldElement);

const newElement = document.createElement('div');
newElement.textContent = 'E';
newElement.className = 'childDiv';
newElement.id = 'EElement';

const oldElement = document.getElementById('BElement');
parentElement.replaceChild(newElement, oldElement);

// removeChild() => remove a child element from the parent element
// syntax: parentElement.removeChild(childElement);
const oldElementD = document.getElementById("DElement");

parentElement.removeChild(oldElementD);
