'use strict';

import './styles.css';
import { appendHomepage } from './homepage.js';

appendHomepage();

const nav = document.querySelector('nav');

nav.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  if (e.target.textContent === 'Home') appendHomepage();
});
