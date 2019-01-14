const loadScriptAsync = (scriptSrc, callback) => {
  /* if (typeof callback !== 'function') {
    throw new Error('Not a valid callback for async script load');
  } */
  var script = document.createElement('script');
  script.onload = callback;
  script.src = scriptSrc;
  document.head.appendChild(script);
};

loadScriptAsync(
  'https://www.googletagmanager.com/gtag/js?id=UA-74793602-1',
  function() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-132429912-1');
  }
);

export default loadScriptAsync;
