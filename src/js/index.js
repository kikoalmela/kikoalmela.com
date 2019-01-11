'use strict';

import '../sass/main.scss';
import handleNav from './navbar';
import { setVhVariable, setCopyright } from './utils';

const loadScripts = () => {
  handleNav();
  setVhVariable();
  setCopyright();
};

window.onload = loadScripts;
