import '../sass/main.scss';
import './lib/cookieconsent/cookieconsent.min.css';
import handleNav from './navbar';
import { setVhVariable, setCopyright } from './utils';
import cookieconsent from './lib/cookieconsent/cookieconsent';
import initCookieconsent from './initCookieconsent';
import addGoogleAnalytics from './google-analytics';

const loadScripts = () => {
  initCookieconsent();
  handleNav();
  setVhVariable();
  setCopyright();
};

cookieconsent();
addGoogleAnalytics();

window.onload = loadScripts;
