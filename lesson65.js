// getElementsByClassName always returns a HTMLCollection
const list1Items = document.getElementsByClassName("listClass1");

console.log(list1Items);

// and for accessing the elements we can use the index
list1Items[0].style.color = 'pink'
list1Items[1].style.color = 'green'
list1Items[2].style.color = 'magenta'

const list3Item = document.getElementsByClassName("listClass3");
console.log(list3Item);

// and for accessing the elements we can use the index
list3Item[0].style.fontSize = '30px'
