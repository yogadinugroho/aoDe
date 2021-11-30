/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const content = document.querySelector('#mainContent');
    content.innerHTML = await page.render();
  }
}
export default App;
