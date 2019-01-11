'use strict';

import '../sass/main.scss';
import '../css/cookieconsent.min.css';
import handleNav from './navbar';
import { setVhVariable, setCopyright } from './utils';
import cookieconsent from './cookieconsent';
import initCookieconsent from './initCookieconsent';

const loadScripts = () => {
  initCookieconsent();
  handleNav();
  setVhVariable();
  setCopyright();
};

cookieconsent();

window.onload = loadScripts;
