/**
<form id='formId' class="grandParent" >FORM
  <div id='divId' class="parent" >DIV
    <p id='paraId' class="child">P</p>
  </div>
</form>
 */

/*
    Event Propagation:
    1. Bubbling => Child to Parent
    2. Capturing => Parent to Child
    3. Target => The element on which the event was triggered
*/
const formEle = document.querySelector("#formId");
formEle.addEventListener("click", function (e) {
  console.log("formEle", this);
  console.log("formEle", e.target);
  alert("Form Clicked");
});

const divEle = document.querySelector("#divId");
divEle.addEventListener("click", function (e) {
  console.log("divEle", this);
  console.log("divEle", e.target);
  alert("Div Clicked");
});

const paraEle = document.querySelector("#paraId");
paraEle.addEventListener("click", function (e) {
  //   e.stopPropagation();
  //   e.stopImmediatePropagation();
  console.log("paraEle1", this);
  console.log("paraEle1", e.target);
  alert("Para Clicked1");
});

paraEle.addEventListener("click", function (e) {
  //   e.stopPropagation();
  //   e.stopImmediatePropagation();
  console.log("paraEle2", this);
  console.log("paraEle2", e.target);
  alert("Para Clicked2");
});

//NOTE: this keyword will always point to the element on which the event listener is attached
//NOTE: e.target will always point to the element on which the event was triggered
