exports.onClientEntry = () => {
  window.onload = () => {
    setTimeout(() => {
      document.getElementById('___loader').style.display = 'none';
    }, 700);
  };
};
