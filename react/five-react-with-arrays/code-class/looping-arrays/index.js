import { movies } from './movies.js';

// console.log(movies);
/* 
map
forEach
filter
sort
for
form of/in
*/

const copyMovies = movies.map((element) => {
    element.actor = 'Adam';
    return element;
});
console.log(copyMovies);
