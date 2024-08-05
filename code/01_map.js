// ********** MAP METHOD **********

// returns a new array
// does'nt change the size of orignal array (un-like filter method)
// uses value from orignal array when making new one

const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer',
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer',
    },
    {
        name: 'susy',
        age: 30,
        position: 'the boss',
    },
    {
        name: 'john',
        age: 26,
        position: 'intern',
    }
]


// const ages = people.map(() => {});      // if i dont retrun any thing in map method-- it return a empty array [] 
// console.log(ages)   // result =>  [ undefined, undefined, undefined, undefined]

// there are three ways of function we can use in map method as callback --- normal function, arrow function or we can also pass by reference

// const ages =  people.map((person) => {
//      console.log(person);
//      return "hello world";      // you can always access data but return what ever you want
// })
// console.log(ages);      //result => ["hello world", "hello world" , "hello world", "hello world"]

// const ages =  people.map((person) => {
//     //  return person.age      // you can always access data but return what ever you want
//     return person.age * 2;     // or i can also manipulate this data -- whatever i'm returning from my arrow fuunction will be the values for Array
// })
// console.log(ages);      //result => [20, 25, 30, 26]

// since it is a arrow function theen wew can convert it into a one liner

const ages = people.map(person => person.age )      // one-liner arrow function
console.log(ages);

// PASSING REFERENCE

const getNames = (person) => person.name

const names = people.map(getNames);

console.log(names);

// you can also return objects

const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age * 20
    }
})
console.log(newPeople);

// returning HTML through MAP Method

const nameArray = people.map((person) => `<h1>User name is : ${person.name}</h1>`);

const result = document.querySelector("#result")

// result.innerHTML = nameArray         // now if you look outpu in the browser, there will some weird , in between names, its bcs we are returning array. to remove this we will convert are array in string through Join()

let str = nameArray + nameArray.join("")
result.innerHTML =  str;