// Reduce - Objects

// Cart Example

const cart = [
    {
        title: 'Smasung S7',
        price: 599.99,
        amount: 1,
    },
    {
        title: 'Google pixel',
        price: 499.99,
        amount: 2,
    },
    {
        title: 'Xiomi Redmi Note 2',
        price: 699.99,
        amount: 4,
    },
    {
        title: 'Xiomi Redmi Note 5',
        price: 399.99,
        amount: 3,
    }
]

// let total = cart.reduce((total, cartItem) => {
//     const {amount, price} = cartItem;
//     // count items
//     total.totalItems += amount;
//     // count numbers
//     total.cartTotal += amount * price;
//     return total
// },{
//     totalItems: 0,
//     cartTotal: 0,
// })
// console.log(total);

let {totalItems, cartTotal} = cart.reduce((total, cartItem) => {          // intead to returning object to "total" we can also destructure object props
    const {amount, price} = cartItem;
    // count items
    total.totalItems += amount;
    // count numbers
    total.cartTotal += amount * price; 
    return total
},{
    totalItems: 0,
    cartTotal: 0,
})
cartTotal = parseFloat(cartTotal.toFixed(2))        // tofixed() returns string, to convert tthat into a numberwe used parseFloat() 
console.log(totalItems, cartTotal)
console.log(cartTotal)



// github repo example

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRepos = async() => {
    const response = await fetch(url)
    const data = await response.json()
    console.log("hello",data)

    const newData = data.reduce((total, repo)=> {
        const {language} = repo;
        // longer logic
        // if(language)
        //     if(total[language]){
        //         total[language] = total[language] + 1;
        //     }else{
        //         total[language] = 1
        //     }
        // }
        // shorter logic

        if(language){
            total[language] = total[language] + 1 || 1
        }
        return total

    },{})
    console.log("total=>>",newData)
}
fetchRepos()

