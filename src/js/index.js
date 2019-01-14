'use strict';

import '../sass/main.scss';
import './lib/cookieconsent/cookieconsent.min.css';
import handleNav from './navbar';
import { setVhVariable, setCopyright } from './utils';
import cookieconsent from './lib/cookieconsent/cookieconsent';
import initCookieconsent from './initCookieconsent';

const loadScripts = () => {
  initCookieconsent();
  handleNav();
  setVhVariable();
  setCopyright();
};

cookieconsent();

window.onload = loadScripts;
