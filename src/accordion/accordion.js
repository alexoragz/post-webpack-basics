//accordion.js
import tracker from '../utils/tracker';
import styles from './accordion.css';

let accordion = document.createElement('div');
accordion.innerHTML = 'This is the accordion text.';
accordion.style.display = 'inline-block';

let toggle = document.createElement('button');
toggle.innerHTML = 'Hide';
toggle.addEventListener('click', function() {
  let isVisible = accordion.style.display !== 'none';
  if(isVisible) {
    accordion.style.display = 'none';
    toggle.innerHTML = 'Show';
  } else {
    accordion.style.display = 'inline-block';
    toggle.innerHTML = 'Hide';
  }
});

document.body.appendChild(toggle);
document.body.appendChild(accordion);

tracker.track('Accordion'); // For analytics 😝
