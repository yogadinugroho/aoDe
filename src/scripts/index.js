/* eslint-disable linebreak-style */
// entry point
import '../style/style.css';
import 'regenerator-runtime';
import App from './views/app';

const app = new App();
window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
});

console.log('halo');
