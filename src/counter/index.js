import tracker from '../utils/tracker';
require('../styles/counter.css');

let counter = document.createElement('div');
counter.innerHTML = 'Counter: ';
counter.style.color = 'tomato';
document.body.appendChild(counter);

tracker.track('Counter');

let count = 1;
setInterval(function() {
  counter.innerHTML = 'Counter: ' + count++;
}, 1000);
