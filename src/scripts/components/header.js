class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>

      .app-bar {
        padding: 8px 16px;
        background-color: white;
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 10px;
        position: sticky;
        top: 0;
        z-index: 99;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      }

      .app-bar .app-bar__menu {
        display: flex;
        align-items: center;
      }

      .app-bar .app-bar__menu button {
        display: inline-block;
        min-width: 44px;
        min-height: 44px;
        background-color: transparent;
        border: none;
        font-size: 18px;
        padding: 8px;
        cursor: pointer;
      }

      .app-bar .app-bar__brand {
        display: flex;
        align-items: center;
      }

      .app-bar .app-bar__brand h1 {
        color: #db0000;
        text-transform: uppercase;
        font-size: 22px;
        user-select: none;
      }

      .app-bar .app-bar__navigation {
        position: absolute;
        top: 50px;
        left: -180px;
        width: 150px;
        transition: all 0.3s;
        padding: 8px;
        background-color: white;
        overflow: hidden;
      }

      .app-bar .app-bar__navigation.open {
        left: 0;
      }

      .app-bar .app-bar__navigation ul li a {
        display: inline-block;
        text-decoration: none;
        color: black;
        padding: 8px;
        margin-bottom: 5px;
        width: 100%;
        min-width: 44px;
        min-height: 44px;
      }
      
    </style>

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
