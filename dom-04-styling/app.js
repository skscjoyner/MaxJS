const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

// will not lose original content and WILL NOT allow direct access.
div.insertAdjacentHTML('beforebegin, afterbegin, beforeend, afterend', 'SOME TEXT');

// document.createElement('TAG-NAME (ex. 'li'))

// */*/* ADDITIONAL METHODS *\*\*
// INSERTING AN ELEMENT MOVES IT. CLONE IS BETTER.

// append
// appendChild
// prepend
// before
// after
// replaceWith
// insertAdjacentElement // saffer and has better browser support
// const newLi2 = newLi.cloneNode(true) // clones or duplicates the node.