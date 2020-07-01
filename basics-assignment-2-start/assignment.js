const task3Element = document.getElementById('task-3');

function one() {
    alert('I did that!');
}

function two(name) {
    name = 'Shawn';
    alert('Hello ' + name);
}

one();
two();

task3Element.addEventListener('click', one);

function three(person, color, transport) {
    person = 'Shawn';
    color = 'blue';
    transport = 'bicycle';
    alert(`${person} rides a ${color} ${transport}`);
}

three();