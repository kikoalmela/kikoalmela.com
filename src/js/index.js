import '../sass/main.scss';
import handleNav from './navbar';
import { setVhVariable, setCopyright } from './utils';

const loadScripts = () => {
  handleNav();
  setVhVariable();
  setCopyright();
};

cookieconsent();
window.onload = loadScripts;
