/* eslint-disable linebreak-style */
// entry point
import '../style/style.css';
import '../style/responsive-style.css';
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';

const app = new App();
window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
});

console.log('halo');
