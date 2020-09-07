exports.onClientEntry = () => {
  window.onload = () => {
    document.getElementById('___loader').style.display = 'none';
    window.isLoaded = true;
  };
};
