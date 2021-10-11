//console.dir(document)
//.textContent, .innerText, .innerHTML, .style
//h1.style.backgroundcolor = 'red;


//caijdo.parenNode
//caijdo.parenElement
//caijdo.children
//caijdo.firstchild

var button = document.getElementById('button').addEventListener('click', buttonClick)

function buttonClick() {
    DocumentFragment.getElementById('header-title').textContent = 'changed'
    DocumentFragment.getElementById('header-title').backgroundColor = 'red'
    console.log(e) //e = event....show toan bo cac thao tac
    console.log(e.target) //lay chinh no
}