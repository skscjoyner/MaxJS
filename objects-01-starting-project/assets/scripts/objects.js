const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    let text = movie.info.title + ' - '; // to render the title. Also, this is chaining methods/props together.
    for (const key in movie.info) { // to loop through all movies
      if (key !== 'title') { // must be string because the object is a string. Otherwise will js look for 'variable' 
        text = text + `${key}: ${movie.info[key]}`; // to output extraName and extraValue - dynamic property info
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
    // title: title, // can use 'title,' ONLY IF KEY AND VALUE ARE IDENTICAL AND DERIVED DYNAMICALLY
    info: {
      title,
      [extraName]: extraValue // [] - needed to assign a DYNAMIC PROPERTY NAME
    },
    id: Math.random() // to assigin a pseudo-unique id.
  };

  movies.push(newMovie);
  // console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const searchedMovie = document.getElementById('filter-title').value;
  renderMovies(searchedMovie);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

// */*/* NOTES *\*\*

// // DOM manipulation 
// const movieList = document.getElementById('movie-list');

// // movieList.style.backgroundColor = 'red'; // accessing style properties
// movieList.style['background-color'] = 'red'; 
// movieList.style.display = 'block';

// const userChosenKeyName = 'level';

// const person = {
//   // name: 'Shawn',
//   'first-name': 'Shawn', // string property name
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   [userChosenKeyName]: '...',
//   greet: function() {
//     alert('Hi!');
//   },
//   1.5: 'hello'
// }; // object literal notation

// // ADDING, MODIFYING, DELETING PROPERTIES
// // Do not assign 'null' or 'undefined' to a property.

// person.isAdmin = true; // adding a property
// person.age = 31; // modifying a property
// delete person.age // deleting a property -- returns 'undefined'

// console.log(person);
// console.log(person['first-name']); // to select property with KEY as a string
// console.log(person[1.5]); // with or without quotes.
// // person.greet(); // stopped the alert from popping up.


// */*/* OBJECT SPREAD OPERATOR *\*\*

// const person = {name: 'Shawn', hobbies: ['Sports', 'Cooking']};
// const anotherPerson = person; // OUTPUT: {name: 'Shawn', hobbies: ['Sports', 'Cooking']}
// person.age = 30 // OUTPUT: person and anotherPerson both updated with age = {name: 'Shawn', hobbies: ['Sports', 'Cooking'], age: 30}
// const person2 = { ...person };
// person.age = 31; // OUTPUT: {name: 'Shawn', hobbies: ['Sports', 'Cooking'], age: 31}
// person2 // OUTPUT: {name: 'Shawn', hobbies: ['Sports', 'Cooking'], age: 30} - age isn't changed
// // inner array NOT copied due to reference NOT changed.
// person.hobbies.push('Coding'); // OUTPUT: person and person2 each have 'Coding' on hobbies.
// person3 = { ...person, age: 29, hobbies: [...person.hobbies]};
// person.hobbies.pop(); // OUTPUT: {name: 'Shawn', hobbies: ['Sports', 'Cooking'], age: 31}
// person3 //OUTPUT: {name: 'Shawn', hobbies: ['Sports', 'Cooking', 'Coding'], age: 29}


// */*/* OBJECT.ASSIGN() SIMILAR TO OBJECT SPREAD OPERATOR (is better) *\*\*

const person = {name: 'Shawn'};
const person2 = Object.assign({}, person); // OUTPUT: {name: 'Shawn'};
person.name = 'Robert'; // OUTPUT: {name: 'Robert'};
person2 // OUTPUT: // OUTPUT: {name: 'Shawn'};

