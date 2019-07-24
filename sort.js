const person = {
   name : "Ritesh",
   email : "rvritesh11@gmail.com",
   address: "maitri nagar" ,  
};

const {name, email, address} = person;

console.table(person);


const movies = [
   { movies: "spiderman", rating: 7.5 },
   { movies: "Hulk", rating: 8.0},
   { movies: "avenger", rating:10},
       ];

       const sortByRating = movies.sort(function(a,b){
              if(a.rating > b.rating){
                  return -1;
              }
              else{
                  return 1;
              }
       });

       console.table(sortByRating);