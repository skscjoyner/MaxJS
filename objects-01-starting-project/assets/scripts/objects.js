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
    // // THE 'IN' KEYWORD allows you to check if a property exists in an object.
    // if ('info' in movie) { // (!('info' in movie)) OR ((movie.info === undefined))- to check for falsy
    //   // code
    // }
    // OBJECT DESTRUCTURING METHOD AND SYNTAX
    const { info, ...otherProps } = movie; // MUST enter the KEY NAME in the object. Can use the REST OPERATOR (...otherProps) for the remaining properties.
    console.log('otherProps - ', otherProps); // OUTPUT: id - only other line property in the INFO object.
    // const { title: movieTitle } = info; // Destructuring the object to get the INFO. Can assign a NEW NAME - movieTitle - to the object.
    // const { getFormattedTitle } = movie;
    // let text = movie.info.title + ' - '; // to render the title. Also, this is chaining methods/props together.
    // // let text = movieTitle.toUpperCase() + ' - '; // will lead to problem???
    
    // /*/*/* ALTERNATE USE OF 'THIS' KEYWORD using 'BIND'*\*\*\
    let { getFormattedTitle } = movie;
    // let text = getFormattedTitle() + ' - '; 
    // let text = movie.getFormattedTitle() + ' - '; 
    // getFormattedTitle = getFormattedTitle.bind(movie); // prepares a function for future use.
    // let text = getFormattedTitle.call(movie) + ' - '; // using CALL instead of BIND - 1st arg = object, can add additional args. Calls function immediately. Comma separated list.
    let text = getFormattedTitle.apply(movie) + ' - '; // using APPLY instead of BIND - ONLY 1 arg must be array. Calls function immediately. Additional args as array.
    
    for (const key in info) { // to loop through all movies
      if (key !== 'title' && key !== '_title') { // must be string because the object is a string. Otherwise will js look for 'variable'. IF USING SET/GET MUST EXCLUDE 'INTERNAL' TITLE.
        // text = text + `${key}: ${movie.info[key]}`; // to output extraName and extraValue - dynamic property info
        text = text + `${key}: ${info[key]}`; // 
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

  if (
    // title.trim() === '' || // validation removed to use GET and SET
    extraName.trim() === '' || 
    extraValue.trim() === ''
    ) {
    return;
  }

  const newMovie = {
    // title: title, // can use 'title,' ONLY IF KEY AND VALUE ARE IDENTICAL AND DERIVED DYNAMICALLY
    info: {
      // title, // removed to use GET and SET METHODS
      set title(val) { // must accept a param that holds the value being set
        this._title = val // internal value NOT the same 'title'
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
        // return this._title.toUpperCase(); // could set upperCase property here
      },
      [extraName]: extraValue // [] - needed to assign a DYNAMIC PROPERTY NAME
    },
    id: Math.random(), // to assign a pseudo-unique id.
    // getFormattedTitle: function() {
    getFormattedTitle() { // shorthand for the above code
      // console.log('getFormattedTitle - THIS', this); // refers to the correct object it references.
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title; // assign value like a property
  console.log('newMovie Title - ', newMovie.info.title);

  // // */*/* GETTERS AND SETTERS *\*\*
  // 1. Add extra validation
  // 2. Transformation
  // 3. Read only values if setter NOT present - ERROR!!


  movies.push(newMovie);
  // console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => { // in an arrow function - keyword this refers to the global window object. Not bound to anything.
  console.log('searchMovieHandler THIS - ', this);
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
//   'first name': 'Shawn', // string property name
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   // [userChosenKeyName]: '...',
//   greet: function() {
//     alert('Hi!');
//   },
//   1.5: 'hello'
// }; // object literal notation

// const keyName = 'first name';

// // ADDING, MODIFYING, DELETING PROPERTIES
// // Do not assign 'null' or 'undefined' to a property.

// person.isAdmin = true; // adding a property
// person.age = 31; // modifying a property
// delete person.age // deleting a property -- returns 'undefined'

// console.log(person);
// console.log(person[keyName]);
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

// const person = {name: 'Shawn'};
// const person2 = Object.assign({}, person); // OUTPUT: {name: 'Shawn'};
// person.name = 'Robert'; // OUTPUT: {name: 'Robert'};
// person2 // OUTPUT: // OUTPUT: {name: 'Shawn'};

