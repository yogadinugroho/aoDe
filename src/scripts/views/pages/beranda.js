/* eslint-disable linebreak-style */
const Beranda = {
  async render() {
    return `
      <style>
        h2 {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          line-height: 56px;
          text-align: center;
          color: #FA8072;
        }
      </style>
      <h2>Doa-Doa</h2>
      <div class="input-group">
        <input type="search" class="form-control rounded" placeholder="masukkan nama doa yang ingin dicari" aria-label="Search"
        aria-describedby="search-addon" />
        <button type="button" class="btn btn-outline-primary">Cari</button>
      </div>
        `;
  },
};
export default Beranda;
