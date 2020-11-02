const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;

// const listItemElements = document.querySelectorAll('li'); // does not give live list - view only
const listItemElements = document.getElementsByTagName('li'); // gives live list - reflects changes

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

// */*/* SELECTOR NOTES *\*\*

document.querySelector('.list-item') // selects first list-item match
const ul = document.querySelector('ul'); 
ul.children[1] // selects 2nd item -- NO TEXT NODES - COLLECTION OF element NODES
ul.childNodes // selects all child nodes...includes TEXT NODES - Can add CSS (white-space: pre) to display TEXT NODES
ul.firstChild // first TEXT or ELEMENT CHILD NODE
ul.firstElementChild // first ELEMENT CHILD NODE
ul.lastChild // last TEXT or ELEMENT CHILD NODE
ul.lastElementChild // last ELEMENT CHILD NODE

// PARENT / ANCESTOR - NOT MANY USE CASES

const liFirst = document.querySelector('li');
liFirst.parentNode // nearest parent node NOT TEXT NODEs 
liFirst.parentElement 

liFirst.closest('body'); // to select body ANCESTOR ELEMENT


// SELECT SIBLING ELEMENTS

const ul = li.parentElement; // to get to other element nodes.
ul.previousSibling // 'text' 
ul.previousElementSibling // 'HEADER
ul.nextSibling // TEXT
ul.nextElementSibling // input


// */*/* DOM Traversal *\*\*

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;
console.log(firstLi); // 'li'

// */*/* SELECTING ALL ELEMENTS *\*\*

// Gives a NodeList
// const allLis = document.querySelectorAll('li') // Selects ALL 'li' elements requested.