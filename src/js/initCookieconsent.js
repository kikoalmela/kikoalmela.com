'use strict';

const initCookieconsent = () => {
  window.cookieconsent.initialise({
    container: document.querySelector('.container'),
    palette: {
      popup: { background: '#292a5b', text: '#FFFCF2', link: '#FFE173' },
      button: { background: '#FFE173', text: '#292a5b' },
      highlight: {
        background: 'transparent',
        border: '#FFE173',
        text: '#FFE173'
      }
    },
    // cookie: { domain: '.kikoalmela.com' },
    content: {
      header: '¡Este sitio utiliza cookies!',
      message:
        'Este sitio utiliza cookies propias y de terceros para obtener datos estadísticos de la navegación de los usuarios y mejorar esta página web. Si aceptas se considera que permites su uso. Puedes cambiar la configuración u obtener más información',
      dismiss: 'Entendido',
      allow: 'Aceptar',
      deny: 'Rechazar',
      link: 'aquí',
      href: 'https://www.kikoalmela.com/rgpd/politica-de-cookies',
      close: '&#x274c;',
      policy: 'Configuración de Cookies',
      target: '_blank'
    },
    type: 'opt-in',
    revokable: true,
    onInitialise: function(status) {
      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        // enable cookies
        console.log('init:', didConsent);
      }
      if (type == 'opt-out' && !didConsent) {
        // disable cookies
        console.log('init:', didConsent);
      }
    },

    onStatusChange: function(status, chosenBefore) {
      var type = this.options.type;
      var didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        // enable cookies
        console.log('change:', didConsent);
      }
      if (type == 'opt-out' && !didConsent) {
        // disable cookies
        console.log('change', didConsent);
      }
    },

    onRevokeChoice: function() {
      var didConsent = this.hasConsented();
      var type = this.options.type;
      if (type == 'opt-in') {
        // disable cookies
        console.log('revoke', didConsent);
      }
      if (type == 'opt-out') {
        // enable cookies
        console.log('cookies revocadas');
      }
    },
    law: {
      regionalLaw: false
    },
    location: true
  });
};

export default initCookieconsent;
