
const liElement1 = document.querySelector('li');
// console.log(liElement1);

// liElement1.innerHTML = "<span>Hello From JAVASCRIPT</span>"
// liElement1.innerText = "Hello From JAVASCRIPT"

// setAttribute always override the existing attribute value
// liElement1.setAttribute('id','list-item-1')
// liElement1.setAttribute('class','list-classes-1 list-classes-2 list-classes-3')
// liElement1.attributes[0].value= "list-item-1";
// liElement1.attributes[1].value = "list-classes-1 list-classes-2";
// console.log(liElement1.attributes[0].value)

liElement1.removeAttribute('class')
liElement1.removeAttribute('name')

const liElement2 = document.querySelectorAll("li");
// console.log(liElement2[1]);

// liElement2[1].innerHTML = "<span>Hello From TYPESCRIPT</span>"
// liElement2[1].innerText = "Hello From TYPESCRIPT"
// liElement2[1].setAttribute("id", "list-item-2");
// liElement2[1].setAttribute(
//   "class",
//   "list-classes-1 list-classes-2 list-classes-3"
// );
// liElement2[1].attributes[0].value = "list-item-1";
// liElement2[1].attributes[1].value = "list-classes-1 list-classes-2";
liElement2[1].removeAttribute("class");
