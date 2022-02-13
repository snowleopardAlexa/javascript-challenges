// es6

// Given the array of objects, add a new object at the beginning and at the end of the array and create a brand new array. 

var animals = [ 'cat', 'dog', 'horse', 'parrot'];

//animals = ["hamster", ...animals]
//animals = [...animals, "lizard"]

animals = ["hamster", ...animals, "lizard"]

console.log(animals)