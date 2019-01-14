// sizing the actual viewport height non cropped on mobile browsers
export const setVhVariable = () => {
  // get the viewport height and multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  ///////////////////
  // --vh update on window resize.
  // Causes weird behavior in Safari iOS due to bars auto hidden on scroll.
  // window.addEventListener("resize", setVhVariable);
};

export const setCopyright = () => {
  // Get current year
  const year = new Date().getFullYear();
  // Set copyright text
  const copyright = document.querySelector('.copy');
  copyright.innerHTML = `&copy; ${year} Kiko Almela`;
};
