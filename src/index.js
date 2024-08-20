'use strict';

import './styles.css';
import { appendHomepage } from './homepage.js';
import { appendMenu } from './menu.js';
import { appendContact } from './contact.js';

const content = document.querySelector('#content');
const nav = document.querySelector('nav');
let tab = 'home';

content.className = tab;

appendHomepage(content);

nav.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;

  // Clear content
  content.textContent = '';

  tab = e.target.textContent.toLowerCase();
  content.className = tab;

  if (tab === 'home') appendHomepage(content);
  else if (tab === 'menu') appendMenu(content);
  else if (tab === 'contact') appendContact(content);
});
