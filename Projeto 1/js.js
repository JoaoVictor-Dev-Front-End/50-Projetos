const panels = document.querySelectorAll('.panel');
const background = document.querySelector('.background');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');

    const id = panel.id;
    switch (id) {
      case 'bra':
        background.style.background = 'linear-gradient(to right, #00843D, #FFCC29, #0000CD)';
        break;
      case 'mex':
        background.style.background = 'linear-gradient(to right, #006400, #FFFFFF, #CE1126)';
        break;
        case 'ita':
        background.style.background = 'linear-gradient(to right, #009246, #FFFFFF, #CD212A)';
        break;
        case 'chi':
        background.style.background = 'linear-gradient(to right, #DE2910, #FFDE00)';
        break;
        case 'jor':
        background.style.background = 'linear-gradient(to right, #000000, #FFFFFF, #138808, #CE1126)';
        break;
        case 'per':
        background.style.background = 'linear-gradient(to right, #EF3340, #FFFFFF, #C8102E)';
        break;
        case 'ind':
        background.style.background = 'linear-gradient(to bottom, #FF9933, #FFFFFF, #138808)';
        break;
      
      default:
        background.style.background = 'linear-gradient(45deg, #FF0000, #00FF00)';
    }
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}
