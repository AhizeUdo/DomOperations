const h1 = document.createElement('h1');
h1.className = 'test'
h1.appendChild(document.createTextNode('Dom Activities'));

console.log(h1);


const li = document.createElement('li');
li.className = 'list'
li.appendChild(document.createTextNode('List DOM activities'));
console.log(li)

// const h2 = document.createElement('h2')
// document.querySelectorAll('h1', 'li').appendChild('h2')
// console.log(h2)

h1.style.color = 'blue'

let h1_edit = document.querySelector('h1');
h1_edit.style.color ='blue'
h1_edit.style.textAlign = 'center'

let p_edit = document.querySelector('p');
p_edit.style.color = 'orange'
p_edit.style.textAlign = 'center'

let hr_edit = document.querySelector('hr');
hr_edit.style.backgroundColor = 'black'
hr_edit.style.marginLeft = '25%'
hr_edit.style.marginRight = '25%'
hr_edit.style.marginTop = '15%'
hr_edit.style.marginBottom = '15%'




let h3_list = document.querySelectorAll('h3.third')
h3_list.style.color = 'red'
