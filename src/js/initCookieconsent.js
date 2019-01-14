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
    cookie: { domain: '.kikoalmela.com' },
    content: {
      header: '¡Este sitio utiliza cookies!',
      message:
        'Este sitio utiliza cookies propias y de terceros para obtener datos estadísticos de la navegación de los usuarios. No se almacenan datos personales ni existen fines comerciales ni publicitarios. Solo se generarán si aceptas su uso. Puedes cambiar tu configuración en cualquier momento y obtener más información',
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
      const type = this.options.type;
      const didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        // enable Google-Analytics tracking
        window['ga-disable-GA_UA-132429912-1'] = false;
      }
      if (type == 'opt-out' && !didConsent) {
        // disable Google-Analytics tracking
        window['ga-disable-GA_UA-132429912-1'] = true;
      } else {
        window['ga-disable-GA_UA-132429912-1'] = true;
      }
    },

    onStatusChange: function(status, chosenBefore) {
      const type = this.options.type;
      const didConsent = this.hasConsented();
      if (type == 'opt-in' && didConsent) {
        // enable Google-Analytics tracking
        window['ga-disable-GA_UA-132429912-1'] = false;
      }
      if (type == 'opt-out' && !didConsent) {
        // disable Google-Analytics tracking
        window['ga-disable-GA_UA-132429912-1'] = true;
      }
    },

    onRevokeChoice: function() {
      const didConsent = this.hasConsented();
      const type = this.options.type;
      if (type == 'opt-in') {
        // disable Google-Analytics tracking
        window['ga-disable-GA_UA-132429912-1'] = true;
      }
      if (type == 'opt-out') {
        // enable Google-Analytics tracking
        window['ga-disable-GA_UA-132429912-1'] = false;
      }
    },
    law: {
      regionalLaw: false
    },
    location: true
  });
};

export default initCookieconsent;
