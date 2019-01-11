'use strict';

const initCookieconsent = () => {
  window.cookieconsent.initialise({
    container: document.querySelector('.container'),
    palette: {
      popup: { background: '#fff' },
      button: { background: '#aa0000' }
    },
    revokable: true,
    onStatusChange: function(status) {
      console.log(this.hasConsented() ? 'enable cookies' : 'disable cookies');
    },
    law: {
      regionalLaw: false
    },
    location: true
  });
};

export default initCookieconsent;
