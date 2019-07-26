//reduce

const numbers = [2, 3, 4, 8];

const sum = numbers.reduce(( accumulator , currentValue) => { return accumulator + currentValue;});

console.log(sum); 

//reduce example

var authors = [{name: 'Ritesh'},{name: 'maitrinagar'},{name: 'xyz'}]
var authorString = authors.map(function(author){
    return author.name;
    
}).join(",");
console.log(authorString);


//some method

var ages = [10, 20, 18 , 30];  

var b = ages.some(checkadult);

function checkadult(age){
  console.log(age>=18);
}


//every method

var ages = [22, 30, 25 , 35];

var b = ages.every(checkadult);

function checkadult(age){
  console.log(age>=18);
}
