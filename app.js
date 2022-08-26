// const h1 = document.createElement('h1');
// h1.className = 'test'
// h1.appendChild(document.createTextNode('Dom Activities'));

// console.log(h1);


// const li = document.createElement('li');
// li.className = 'list'
// li.appendChild(document.createTextNode('List DOM activities'));
// console.log(li)

// // const h2 = document.createElement('h2')
// // document.querySelectorAll('h1', 'li').appendChild('h2')
// // console.log(h2)

// h1.style.color = 'blue'

// let h1_edit = document.querySelector('h1');
// h1_edit.style.color ='blue'
// h1_edit.style.textAlign = 'center'

// let p_edit = document.querySelector('p');
// p_edit.style.color = 'orange'
// p_edit.style.textAlign = 'center'

// let hr_edit = document.querySelector('hr');
// hr_edit.style.backgroundColor = 'black'
// hr_edit.style.marginLeft = '25%'
// hr_edit.style.marginRight = '25%'
// hr_edit.style.marginTop = '15%'
// hr_edit.style.marginBottom = '15%'
// const header = document.getElementsByClassName('header-class');
// header.style.color = 'blue'




const header_one = document.getElementById('header-class')
const header_two = document.getElementById('header-class-two')
const header_set = []

header_set.push(header_one)
header_set.push(header_two)
console.log(header_set)
header_set[0].style.color = "white"
header_set[0].style.marginTop = '4%'
header_set[0].style.marginBottom = '5%'
header_set[1].style.color = "white"
header_set[0].style.fontSize = '6rem'
header_set[1].style.fontSize = '3rem'
header_set[0].style.fontFamily = "'Dosis', Sans-serif"
header_set[1].style.fontFamily = "'Dosis', Sans-serif"
header_set[0].style.textAlign = 'center'
header_set[1].style.textAlign = 'center'
header_set[0].style.fontWeight = '100'
header_set[1].style.fontWeight = '100'
paragraph_set = []
const p_one = document.getElementById('p-one')
const p_two = document.getElementById('p-two')
paragraph_set.push(p_one)
paragraph_set.push(p_two)
console.log(paragraph_set)
const p_loop = function(){
    for(let i = 0; i < paragraph_set.length; i++){
        paragraph_set[i].style.color = 'white'
        paragraph_set[i].style.fontFamily = "'Dosis', Sans-serif"
        paragraph_set[i].style.textAlign = 'center'
        paragraph_set[i].style.fontWeight = '100'
        paragraph_set[i].style.fontSize = '1.7rem'
        paragraph_set[i].style.marginRight = '10%'
        paragraph_set[i].style.marginLeft = '10%'
    }
}
p_loop()
let hr_edit = document.querySelector('hr');
hr_edit.style.backgroundColor = 'black'
hr_edit.style.marginLeft = '15%'
hr_edit.style.marginRight = '15%'
hr_edit.style.marginTop = '5%'
hr_edit.style.marginBottom = '5%'


const ul = document.getElementById('ul-list');
const li = document.getElementById('list-one');
const liOne = document.getElementById('list-two');
const liTwo = document.getElementById('list-three');
li_set=[]
li_set.push(li);
li_set.push(liOne);
li_set.push(liTwo);
console.log(li_set);

ul.style.display = 'flex'

const li_loop = function(){
    for(let i = 0; i < li_set.length; i++){
        li_set[i].style.color = 'white'
        li_set[i].style.fontSize = '1.7rem'
        li_set[i].style.fontFamily = "'Dosis', Sans-serif"
        li_set[i].style.padding = '2rem'
        li_set[i].style.marginLeft = '13.5%'
        li_set[i].style.marginRight = '12%'
        li_set[i].style.cursor = 'pointer'
        li_set[i].style.flexDirection = 'column'
        li_set[i].style.listStyle = 'none'
        li_set[i].style.textAlign = 'center'

    }
}
li_loop()