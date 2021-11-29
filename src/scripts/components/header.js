class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
        <div class="app-bar__menu">
                <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
            <h1>aoDe</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="/">Beranda</a></li>
                <li><a href="/">Ingin Dihafal</a></li>
                <li><a href="/">Sudah Dihafal</a></li>
                <li><a href="/">Tentang Kami</a></li>
            </ul>
        </nav>
    </header>`;
  }
}

customElements.define('custom-header', CustomHeader);
