// ********* Unique Values **********

// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name: 'steak',
        category: 'dinner',
    },
    {
        name: 'bacon',
        category: 'breakfast',
    },
    {
        name: 'eggs',
        category: 'breakfast',
    },
    {
        name: 'pasta',
        category: 'dinner',
    },
]
// new Set() - es6 introduced us to a new data structure that will return us unique values

  const categories = menu.map((item) => item.category)
  console.log(categories);
  
//   const categories1 =new Set( menu.map((item) => item.category))        // Set - returns unique values
//   console.log(categories1);
  // result => Set { 0: 'breakfast', 1: 'lunch', 2: 'dinner' }

  // now problem is Set return us object - so now we have to convert it into a n array through spread operator

  const categories1 =['all', ...new Set( menu.map((item) => item.category))]        // Set - returns unique values
  console.log(categories1);

//  one way 

//   const categoriesArray = categories1.map(item => `<h3>category: ${item}</h3>`)

//   const result = document.querySelector('#result');
//   result.innerHTML = categoriesArray.join("")

// other way

const result = document.querySelector('#result');
result.innerHTML = categories1.map(item => `<button>${item}</button>`).join("");        // join("") is added bcs map is returning array so we converted array to string with the help of join method