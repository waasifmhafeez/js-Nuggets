// faster/ easirer way to access/ unpack variables from array, objects (later videos);

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0]
const fruit2 = fruits[1]
const fruit3 = fruits[2]

console.log(fruit1, fruit2, fruit3);

// Destructuring

// const [john, peter,bob, anna] = friends;

// const [ peter,bob, anna] = friends;

// console.log( peter, bob, anna)      // result => [ 'john', 'peter', 'bob' ] order matters here

// if you want random values from between

const [john, , bob, ,anna ] = friends
console.log(john, bob, anna);       // result => [ 'john', 'bob', 'kelly' ]  to access ramdom values just leave  empty commas , ,

// here is code for switching values of two variables

let first = 'bob';
let second = 'john';

// let temp = second
// second = first
// first = temp

// console.log(first, second);   // result => [ 'john', 'bob' ]  values are switched

// but we can do it simply with the help of Destructuring

[second, first] = [first, second];

console.log(first, second);     // result => [ 'john', 'bob' ]  values are switched



