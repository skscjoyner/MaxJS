const addMovieModal = document.getElementById("add-modal"); // prefered method since it has an id
// const addMovieModal = document.querySelector('#add-modal'); // need CSS selector
// const addMovieModal = document.body.children[1]; // selects the <div> that contains the modal. PROBLEM is changes
const startAddMovieButton = document.querySelector("header button"); // due to 1 header and button in the header
// const startAddMovieButton = document.querySelector('header').lastElementChild; // changes will be a problem.
const modalBackdrop = document.getElementById("backdrop");
// const modalBackdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  modalBackdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  // function() {} (can use either method to declare a function.)
  // addMovieModal.className = 'class name'; // problem keeping track of names. LESS CLEAR
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInputs();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5.)');
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInputs();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
modalBackdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
