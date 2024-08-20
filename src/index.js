'use strict';

import './styles.css';
import { appendHomepage } from './homepage.js';
import { appendMenu } from './menu.js';

const content = document.querySelector('#content');
const nav = document.querySelector('nav');

appendHomepage(content);

nav.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;

  // Clear content
  content.textContent = '';

  if (e.target.textContent === 'Home') appendHomepage(content);
  else if (e.target.textContent === 'Menu') appendMenu(content);
});
