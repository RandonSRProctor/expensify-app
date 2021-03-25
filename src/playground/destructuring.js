// Object Destructuring 1

// const person = {
//     name: 'Randy',
//     age: 33.5,
//     location: {
//         city: 'Cincinnati',
//         temp: 64
//     }
// }

// const { name: firstName = 'Anonymous' , age } = person
// console.log(`${name} is ${age}.`)

// const { temp: temperature, city } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// Object Destructuring 2

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

// Array Destructuring 1

// const address = ['1299 South Juniper Street', 'Philadelphia', 'PA', '19147']

// const [ , city, state = 'New York' ] = address
// console.log(`You are in ${city}, ${state}.`)

// Array Destructuring 2

// const item = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.75' ]

// const [ itemDescription, , mediumPrice ] = item
// console.log(`A medium ${itemDescription} costs ${mediumPrice}`)