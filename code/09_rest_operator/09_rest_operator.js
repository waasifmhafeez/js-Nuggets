// REST Operator
// gathers/ collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// array
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];

// const [first] = fruits;

// now do it with rest operation, it'll assign first element of array to 'first' , and returns the rest of the elements into a array called 'rest
const [first, second, ...restOfTheFruits] = fruits     // rest operator will collect all the remaining values of the array which we didnt destructred with name


console.log(first, second, restOfTheFruits);     // result => [ 'apple', 'orange', [ 'lemon', 'banana', 'pear' ] ]

const specificFruit = restOfTheFruits.find(fruit => fruit === 'lemon')

console.log(specificFruit );



// objects
const person = { name: 'john', lastName: 'smith', job: 'developer', age: 22, religon: 'islam'};

// const {name} = person;
// console.log(name);

const {name, lastName, ...restOfObject} = person;

console.log(name, lastName, restOfObject);      // result => [ 'john', 'smith', { job: 'developer', age: 22, religon: 'islam' } ]
// in case of object it will return rest of the properties in to a object

// functions

const getAverage = (name, ...scores) => {
    console.log(name)
    console.log(scores)

    // const avg = scores.reduce((total, item) => {
    //     total += item;
    //     return total;
    // },0) / scores.length;

    const avg = scores.reduce((total, item) => {return total += item},0) / scores.length;       // one liner logic of above code

    console.log(avg)
}
// getAverage('wasif', 22,23,23,21,2,32)

// if you have put values from an array
const testScores =  [23,56,47,73];

getAverage(person.name, ...testScores)
 