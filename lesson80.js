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


    
// insertAdjacentHTML() => insert an HTML string as a sibling to the element

// syntax: targetElement.insertAdjacentHTML(position_in_string_format, newElement_in_HTML_string)

// position: beforebegin, afterbegin, beforeend, afterend


//targetElement
const targetElement = document.querySelector(".innerClass");

// const newElement = document.createElement("p");
// const textNode = document.createTextNode("New Element");
// newElement.appendChild(textNode);

// replace the above 3 lines with the following line
// const newElement = `<p>New Element</p>`;

// targetElement.insertAdjacentHTML("beforebegin", newElement);
// targetElement.insertAdjacentHTML("afterbegin", newElement);
// targetElement.insertAdjacentHTML("beforeend", newElement);
// targetElement.insertAdjacentHTML("afterend", newElement);


//insertAdjacentText() => insert a text as a sibling to the element

// syntax: targetElement.insertAdjacentText(position_in_string_format, newElement_in_string)

// position: beforebegin, afterbegin, beforeend, afterend

const newText = "New Text";

targetElement.insertAdjacentText("beforebegin", newText);
targetElement.insertAdjacentText("afterbegin", newText);
targetElement.insertAdjacentText("beforeend", newText);
targetElement.insertAdjacentText("afterend", newText);
