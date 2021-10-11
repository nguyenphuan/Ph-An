//function js
// object constructor
function User(a, b, c) {
    this.an = a;
    this.bo = b;
    this.cu = c;
}

var author = new User('an', 'nguyen', 'ngu');
console.log(author)


//hoc function
var andbo = function(a,b){
    console.log(a,b)
}
andbo(2,4 )