import tracker from '../utils/tracker';
import styles from './counter.css';

let counter = document.createElement('div');
counter.innerHTML = 'Counter: ';
counter.style.color = 'tomato';
counter.classList.add('counter');
document.body.appendChild(counter);

tracker.track('Counter');

let count = 1;
setInterval(function() {
  counter.innerHTML = 'Counter: ' + count++;
}, 1000);
