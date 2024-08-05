

// Filter - returns a new array, can manipulate the size  of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
    { name: "bob", age: 20, position: 'developer'},
    { name: "peter", age: 25, position: 'designer'},
    { name: "susy", age: 30, position: 'the boss'},
    { name: "anna", age: 35, position: 'intern'},
];

// ************ filter ************

const youngPeople = people.filter((person) => {
    console.log(person); 
    //you can always acces the data but return only what every you want
    return true     // if you return true you will get every single item
    // return false       //   but if you return false you'll get nothing and empty array
})
console.log(youngPeople);

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

// another example with develpers property

const developer = people.filter(person => person.position === 'developer')      // one-liner arrow function for filter method
console.log(developer);

// ************* no match ************* 

const seniorDevs = people.filter(item => item.profession === 'senior dev');
console.log(seniorDevs);


// ************* find ************* 

// ************* no match **************

// multiple matched - first match