

const todos = [
    {
        id: 1,
        text: 'cai con heo nay',
        isCompleted: true,
    },

    {
        id: 2,
        text: 'cai con ga nay',
        isCompleted: true,
    },

    {
        id: 3,
        text: 'cai con rong nay',
        isCompleted: true,
    }
];

//lam vie_c voi array: forEach, map (tra ve array), filter

//forEach
todos.forEach(function(todo) {
    console.log(todo.text)
});
//map
const todoText = todos.map(function(todo) {
    return todo.text;
})
console.log(todoText);
//filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log( todoCompleted)







// If
// const x = 4;
// const y = 10;
// if(x==10 || y==10) {
//     console.log('x is 10')
// } else {
//     console.log('x is Not 10')
// }
// shorthand IF (condition shorthand)
const x = 10;

const color = x > 10 ? 'red' : 'blue'
console.log(color)

switch(color) {
    case 'red':
    console.log('color is red');
    break;

    case 'blue':
    console.log('color is blue');
    break;
    default
}






























