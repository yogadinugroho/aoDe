import DoaSource from "../../data/doa-source";

/* eslint-disable linebreak-style */
const Beranda = {
  async render() {
    return `
        <div class="skip"></div>
        <div class="hero"></div>
        <h2 tabindex="0">Explore Restaurant</h2>
        <div class="doa-list">
            <div class="doa-item">
                <div class="img-item">
                    <img src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-cartoon-sleeping-day-character-illustration-image_1216735.jpg">
                </div>
                <div class="title-item">
                    <h3>Doa Sebelum Tidur</h3>
                </div>
            </div>
        </div>
        `;
  },
  /*async afterRender(){
    const doa2 = await DoaSource.allDoa();
    const doaContainer = document.querySelector('.doa-list');
    doa2.forEach((doa) => {

    })
  }*/
};
export default Beranda;
