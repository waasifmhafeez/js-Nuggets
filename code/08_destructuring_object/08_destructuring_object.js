
const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
        sister: 'jane',
    }
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);       // result => [ 'bob', 'sanders', 'jane' ]


// destructuring

// const {first, last, city, zip} = bob;

// console.log(first, last, city, zip);    // result => [ 'bob', 'sanders', 'chicago', undefined ] -- if some value is not present it will return undefined

const {last: cakeAndBakes, first, city} = bob;

console.log( first, cakeAndBakes, city)     // result => [ 'bob', 'sanders', 'chicago' ]  here order of destructuring doesnt matters
// you can also use aliased names for properties 'cakeAndBakes', but once you defined aliased then you cant use previous name like "last"

const {siblings: {sister : behan}} = bob;   // thats how you can destructure properties of objects

console.log(behan);

// function printPerson(person){
//     console.log(person.first);      // result => bob
// }
// printPerson(bob)

// doing with the help of Object destructuring

// function printPerson(person){
//     const {first, last} = person;
//     console.log(first, last)
// }

function printPerson({first, last, city, siblings:{sister:sis}}){
    console.log(first, last, sis, city)
}
printPerson(bob)

