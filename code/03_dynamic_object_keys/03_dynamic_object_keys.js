// dot notation

const person = {
    name: 'john',
};

console.log(person.name);
person.age = 25;
console.log(person);

// Square Bracket Notation

const item = {
    "featured-items": [ "item1", "item2"]       // if your property name is a String, then you cant access it dot notation like item."featured-item" it will be an error, so you have to use square bracket notation item.["featured-item"]
}
// console.log(item."featured-items");      // ite will be an error
console.log(item['featured-items']);    // its the correct way 

console.log(person["name"]);    // same will work for person object

// or you can also do this
const personName = "name";
console.log(person[personName]);        // in this case we are only passing reference, so we dont need to write it in semi colons ""

// Now take a look at how we can set KEYS DYNAMICALLY using Square Bracket [] notation

 let appState = 'loading'
 let keyName = 'Computer'

 const app = {
    [appState]: true,       // here keyName will be the "String" or value that is assign to the "appState"
 }

 // to add new properties in a existing Object Dynamically

 app[keyName] = "apple"         // here also the actual name of key "keyName" will be "Computer" not "keyName"
 console.log(app);
 console.log(app.loading);
 console.log(app[appState]);
 // we can acces them through any of the above way

 // now lets have a look at this example where its really handly add, update, delete those values on the object dynamically

 const state = {
    loading: true,
    name: '',
    job: '',
 }

 function updateState(key, value){
    state[key] = value;
 }

 // editing existing properties
 updateState("name","john")
 updateState("job","Engineer")
 // adding new properties
 updateState("age", 24)
 updateState("products", [])

 console.log(state);
 