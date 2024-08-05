

// Filter - returns a new array, can manipulate the size  of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
    { name: "bob", age: 20, position: 'developer'},
    { name: "peter", age: 25, position: 'designer'},
    { name: "susy", age: 30, position: 'the boss'},
    { name: "anna", age: 35, position: 'intern'},
];

const fruits = ['orange', 'pear', 'lemon'];

// ************ filter ************

const youngPeople = people.filter((person) => {
    console.log(person); 
    //you can always acces the data but return only what every you want
    return true     // if you return true you will get every single item
    // return false       //   but if you return false you'll get nothing and empty array
})
console.log(youngPeople);
// result => [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'the boss' },
//   { name: 'anna', age: 35, position: 'intern' }
// ]


// to get persons under thirty 30

// const personsUnderThirty = people.filter((person) => {
//     if(person.age < 30) return true
// })

// same as above

// const personsUnderThirty = people.filter((person) => {
//     if(person.age < 30) return person
// })

// same as above

const personsUnderThirty = people.filter((person) => {
    return person.age < 30
})
console.log(personsUnderThirty);
// result => [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' }
// ]

// another example with develpers property

const developer = people.filter(person => person.position === 'developer')      // one-liner arrow function for filter method
console.log(developer);
// result => { name: 'bob', age: 20, position: 'developer' }

// ************* no match ************* 

const seniorDevs = people.filter(item => item.profession === 'senior dev');
console.log(seniorDevs);    // in filter you atleast get a empty array []
// result => []

// ************* find ************* 

const peter = people.find(item => item.name === 'peter')
console.log(peter);
// result => { name: 'peter', age: 25, position: 'designer' }

const fruit = fruits.find((fruit) => fruit === 'lemon');
console.log(fruit);
// result => lemon


// ************* no match **************

const oldPerson = people.find(person => person.age > 35);
console.log(oldPerson);  // returns undefined when cant find 
// result => undefined

// multiple matched with find - first match

const randomPerson = people.find(person => person.age < 35 );
console.log(randomPerson);      // it only returns the first matched item
// result => { name: 'bob', age: 20, position: 'developer' }

// in filter even if have only one item it will still returns array

const anna = people.filter(person => person.name === 'anna')
console.log(anna);
// result => [ { name: 'anna', age: 35, position: 'intern' } ]

// now have look how i access properties in "anna" and "peter"

console.log(peter.name);        // result => 'peter'
console.log(anna[0].name);      // result => 'anna'






 