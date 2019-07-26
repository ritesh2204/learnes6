const person = {
    
    name: "Ritesh",
    age:26,
    address: "risali"

};


var r = 10;
const pi =3.1453;

let msg = `My name is ${person.name}. My age is ${person.age}. Area of circle is ${pi * r * r}`;
console.log(msg);

const template = `

              my name is ${person.name};
                   my age is ${person.age};
       my address is ${person.address};


`;

console.log(template);

const person1 = `

<ul>
   <li>${person.name}</li>
   <li>${person.age}</li>
   <li>${person.address}</li>
</ul>

`;

document.body.innerHTML = template;

const obj = {
    name: 'AppDividend',
    author: 'Krunal Lathiya'
};
const combined = {
    ...obj,
    age: 25
};
console.log(combined);